# Generated by Django 3.1.5 on 2021-01-20 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0004_auto_20210120_1026'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='category',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='country',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='price_level',
            field=models.IntegerField(default=1),
        ),
    ]
