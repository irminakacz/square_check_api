# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-24 15:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('square_check', '0002_list'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='list',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='square_check.List'),
            preserve_default=False,
        ),
    ]
