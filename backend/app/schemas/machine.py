from typing import Optional, List, Any, Dict
from pydantic import BaseModel

# Category Schemas
class CategoryBase(BaseModel):
    name: str
    description: Optional[str] = None

class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase):
    id: int
    class Config:
        orm_mode = True

# Product Schemas
class ProductBase(BaseModel):
    name: str
    model_number: str
    base_price: float
    specifications: Optional[Dict[str, Any]] = None

class ProductCreate(ProductBase):
    category_id: int

class Product(ProductBase):
    id: int
    category_id: int
    class Config:
        orm_mode = True

# Machine Schemas
class MachineBase(BaseModel):
    serial_number: str
    status: str = "AVAILABLE"
    location_id: Optional[str] = None

class MachineCreate(MachineBase):
    product_id: int

class Machine(MachineBase):
    id: int
    product_id: int
    product: Product
    class Config:
        orm_mode = True
