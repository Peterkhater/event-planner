# Generated by Django 5.1.5 on 2025-02-02 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventPlanner', '0002_alter_category_icon_alter_categoryimage_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='categoryimage',
            name='photoGrapher',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
