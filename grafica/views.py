from django.shortcuts import render

# Create your views here.
from django.template.response import TemplateResponse

from mezzanine.pages.models import RichTextPage


def export(request):
    return TemplateResponse(request, "pages/export.html", dict(pages=RichTextPage.objects.all()))
