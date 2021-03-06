"""
WSGI config for mezzajanua project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from mezzanine.utils.conf import real_project_name

os.environ.setdefault("DJANGO_SETTINGS_MODULE",
                      "%s.settings" % real_project_name("mezzajanua"))

application = get_wsgi_application()


# add this block of code
try:
    import uwsgidecorators
    from django.core.management import call_command

    @uwsgidecorators.timer(30)
    def send_queued_mail(num):
        """Send queued mail every 30 seconds"""
        call_command('send_queued_mail', processes=1)

    @uwsgidecorators.timer(60*60)
    def delete_comments(num):
        """Delete comments every hour"""
        from mezzanine.generic.models import Comment
        Comment.objects.all().delete()

except ImportError:
    print("uwsgidecorators not found. Cron and timers are disabled")
