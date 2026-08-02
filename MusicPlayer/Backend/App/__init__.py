from flask import request, Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flasgger import Swagger
from config import config_options
import os # Moved import to top for cleaner structure

db = SQLAlchemy()
migrate = Migrate()
cors = CORS()
jwt = JWTManager()

swagger_config = {
    "headers": [],
    "specs": [
        {
            "endpoint" : 'apispec_1',
            "route": '/apispec_1.json',
            "rule_filter": lambda rule: True,
            "model_filter": lambda model: True,
        }
    ],
    "static_url_path": "/flassgger_static",
    "swagger_ui": True,
    "specs_route": "/apidocs/"
}

# Updated to reflect your actual project!
swagger_template = {
    "swagger": "2.0",
    "info": {
        "title": "Personal Music Player API",
        "description": "Production-ready REST API for local audio streaming",
        "version": "1.0.0"
    },
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
            "description": "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\""
        }
    }
}
swagger = Swagger(config=swagger_config, template=swagger_template)

def create_app(config_name="development"):
    """The Application Factory Function"""
    
    app = Flask(__name__)
    app.config.from_object(config_options[config_name])
    
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    allowed_origins = os.getenv("FRONTEND_URL", "http://localhost:5173").split(",")
    cors.init_app(app, resources={
        r"/api/*": {
            "origins": allowed_origins,
            "expose_headers": ["Content-Range", "Accept-Ranges"]
        }
    })
    
    swagger.init_app(app)
    
    from App.Routes.music_player import song_route
    app.register_blueprint(song_route, url_prefix="/api")
    
    from App import models
    
    with app.app_context():
        try:
            from App.Utils.Scanner import scan_local_music_folder
            
            DEVICE_MUSIC_PATH = r"N:\Programming\Projects\mini-projects\MusicPlayer\test_songs"
            
            print("checking storage for new songs")
            scan_local_music_folder(DEVICE_MUSIC_PATH)
        except Exception as e:
            print(f"Scanner initialization failed: {str(e)}")
    
    return app