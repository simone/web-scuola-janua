from django.shortcuts import render

# Create your views here.

def export(request):
    from django.template.response import TemplateResponse
    from mezzanine.pages.models import RichTextPage
    return TemplateResponse(request, "pages/export.html", dict(pages=RichTextPage.objects.all()))
