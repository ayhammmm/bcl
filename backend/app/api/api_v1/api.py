from fastapi import APIRouter

api_router = APIRouter()

from app.api.api_v1.endpoints import machines, login, users

api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(machines.router, prefix="/inventory", tags=["inventory"])
