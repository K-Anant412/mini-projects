from flask import request, Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flasgger import Swagger
from config import config_options

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

swagger_template = {
    "swagger": "2.0",
    "info": {
        "title": "WealthWatch API Documentation",
        "description": "Production-ready REST API for personal expense tracking",
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

def create_app(config_name="devlopment"):
    """The Application Factory Function"""
    
    app = Flask(__name__)
    
    import os
    allowed_origins = os.getenv("FRONTEND_URL", "http://localhost:5173").split(",")
    cors.init_app(app, resources={r"/api/*":{"origins": allowed_origins}})
    
    app.config.from_object(config_options[config_name])
    
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app, resources={r"/api/*":{"origin":"*"}})
    swagger.init_app(app)
    
    
    from App import models
    return app