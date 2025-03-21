"""added guardrail_details column to ai_app table

Revision ID: a95b604c47fb
Revises: 5e805b526efa
Create Date: 2024-10-25 13:30:46.711052

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a95b604c47fb'
down_revision: Union[str, None] = '5e805b526efa'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('ai_application', sa.Column('guardrail_details', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('ai_application', 'guardrail_details')
    # ### end Alembic commands ###
