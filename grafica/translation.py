from modeltranslation.translator import translator
from mezzanine.pages.translation import TranslatedPage, TranslatedRichTextPage, TranslatedLink
from mezzanine.pages.models import Page, RichTextPage, Link

class TranslatedInjectedPage(TranslatedPage):
    fields = ('subtitle',),

#translator.unregister(Page)
#translator.register(Page, TranslatedInjectedPage)
