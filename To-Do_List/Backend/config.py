from dotenv import load_dotenv
from urllib.parse import quote_plus
import os

load_dotenv()

class Config:
    """Base configuration with shared settings"""
    
    SECRET_KEY=os.getenv("SECRET_KEY", "fallback-local-development-key")
    JWT_SECRET_KEY=os.getenv("JWT_SECRET_KEY", "fallback-jwt-secret-kwy")
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    
class Development(Config):
    """Local development environment"""
    
    DEBUG=True
    
    db_user=os.getenv("")
    db_host=os.getenv("")
    db_password=os.getenv("")
    db_port=os.getenv("")
    db_database=os.getenv("")
    
    SQLALCHEMY_DATABASE_URI=f"mysql+pymysql://{db_user}:{db_password}@{db_host}:{db_port}/{db_database}"
    
class Production(Config):
    """Production development environment"""
    
    DEBUG=False
    
    _raw_uri = os.getenv("DATABASE_URL")
    
    if _raw_uri and _raw_uri.startswith("postgres://"):
        SQLALCHEMY_DATABASE_URI = _raw_uri.replace("postgres://", "postgresql://", 1)
    else:
        SQLALCHEMY_DATABASE_URI = _raw_uri
        
config_options={
    "development": Development,
    "production": Production
}