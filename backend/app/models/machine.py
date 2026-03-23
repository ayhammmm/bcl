from sqlalchemy import Column, Integer, String, ForeignKey, Enum, Float, JSON
from sqlalchemy.orm import relationship
from app.db.base_class import Base
import enum

class MachineStatus(str, enum.Enum):
    AVAILABLE = "AVAILABLE"
    RESERVED = "RESERVED"
    SOLD = "SOLD"
    MAINTENANCE = "MAINTENANCE"

class Category(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    
    products = relationship("Product", back_populates="category")

class Product(Base):
    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("category.id"))
    name = Column(String, index=True)
    model_number = Column(String, index=True)
    base_price = Column(Float)
    specifications = Column(JSON, nullable=True) # Stored as JSONB in Postgres
    
    category = relationship("Category", back_populates="products")
    machines = relationship("Machine", back_populates="product")

class Machine(Base):
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("product.id"))
    serial_number = Column(String, unique=True, index=True)
    status = Column(String, default=MachineStatus.AVAILABLE) # Using string to avoid enum issues, validated by schema
    location_id = Column(String, nullable=True)
    
    product = relationship("Product", back_populates="machines")
