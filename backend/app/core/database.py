from sqlmodel import create_engine, Session

from app.core.config import settings

# echo=True printa no terminal todas as queries SQL que rodarem
engine = create_engine(settings.DATABASE_URL, echo=True)


def get_session():
    with Session(engine) as session:
        yield session
