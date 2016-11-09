from django.contrib import admin

# Register your models here.
from copy import deepcopy
from django.contrib import admin
from mezzanine.pages.admin import PageAdmin
from mezzanine.pages.models import Page, RichTextPage

page_fieldsets = deepcopy(PageAdmin.fieldsets)
page_fieldsets[0][1]["fields"].insert(1, "subtitle")

class MyPageAdmin(PageAdmin):
    fieldsets = page_fieldsets

admin.site.unregister(Page)
admin.site.unregister(RichTextPage)
admin.site.register(Page, MyPageAdmin)
admin.site.register(RichTextPage, MyPageAdmin)