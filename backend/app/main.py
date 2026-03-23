# from fastapi import FastAPI
# from app.core.config import settings
# from app.api.api_v1.api import api_router

# app = FastAPI(
#     title=settings.PROJECT_NAME,
#     openapi_url=f"{settings.API_V1_STR}/openapi.json"
# )

# app.include_router(api_router, prefix=settings.API_V1_STR)

# # Dependency to create tables for MVP (In production use Alembic)
# from app.db.base_class import Base
# from app.db.session import engine
# from app.models import machine, user # Import models ensuring they are registered
# Base.metadata.create_all(bind=engine)

# @app.get("/")
# def root():
#     return {"message": "Welcome to BLC Operations System API"}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware # 1. Import the middleware
from app.core.config import settings
from app.api.api_v1.api import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# 2. Add the CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "https://bcl-one.vercel.app" # <-- Paste your exact Vercel URL here (NO trailing slash)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

# Dependency to create tables for MVP (In production use Alembic)
from app.db.base_class import Base
from app.db.session import engine
from app.models import machine, user # Import models ensuring they are registered
Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "Welcome to BLC Operations System API"}