from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "BLC Operations System"
    API_V1_STR: str = "/api/v1"
    
    # DATABASE - Using SQLite for development
    SQLALCHEMY_DATABASE_URI: str = "sqlite:///./blc_database.db"

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()