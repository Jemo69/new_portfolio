import { createClient } from '@libsql/client';

const client = createClient({ 
  url: 'libsql://new-portfolio-jemo69.aws-us-west-2.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NTkzNjQ0MTcsImlkIjoiYmE0Y2U1ZjktNjViNC00YTdiLWI1YjctNzMwMGM3Y2UyODc5IiwicmlkIjoiZTZiZDY4MTgtYWJkMC00NDc3LTg1NDgtMDBmOGQ0ZjViMzM1In0.5N2r4FRlrwbCTYoHRTxiiO7nGeavfrMMd4KzACTYjQn7UYKsYdcPOFKXOpWoZy6WyysPQE2AcwXObKc00m1xDQ'
});

const newContent = `<p>Django, the web framework for web perfectionists, has been in the game since '05, doing wonders and powering sites like Instagram, Pinterest, Spotify, and Robinhood, as well as many others we never hear about.</p>

<p>Now let's talk about Django 6, the latest version of the framework created by Adrian Holovaty and Simon Willison.</p>

<p>As old as this framework is, it is dropping support for older versions of Python — specifically Python 3.11 and below. That means if you're not on Python 3.12+, you can't upgrade. So for you LTS holdouts who love 3.10 and 3.11, it is time to move on. The Django team does not want you anymore, and that is a fact. They want you on the latest stable versions of Python, which, in my opinion, is good.</p>

<p>I don't know about you, but I update with every version of Python because the improvements in the newer versions are not in the old ones.</p>

<h2>Task Framework</h2>

<p>Let me start by saying: fuck Celery and Django Q2.</p>

<p>There's a new player in the game called Django's task framework. This new task framework is useful for running simple tasks, like sending an email to a user who just signed up. No more having to use Celery just to send basic emails.</p>

<p>So how do you use it? Like this:</p>

<pre><code class="language-python" data-language="python">from django.core.mail import send_mail
from django.tasks import task

@task
def email_users(emails, subject, message):
    return send_mail(subject, message, None, emails)</code></pre>

<p>That is how you define a task. Then in <code>views.py</code>, you use this:</p>

<pre><code class="language-python" data-language="python">email_users.enqueue(
    emails=["user@example.com"],
    subject="You have a message",
    message="Hello there!",
)</code></pre>

<h3>Warning</h3>

<p>Do note that this does not outright replace Celery. It is just for simple tasks like sending emails to users — that's it.</p>

<p>You cannot use the Django-provided backend for production. You will have to find a backend to use, and I recommend the package <code>django-tasks</code>.</p>

<p>To install it:</p>

<pre><code class="language-bash" data-language="bash">pip install django-tasks

# for uv users
uv add django-tasks</code></pre>

<p>Then change your <code>settings.py</code> like this:</p>

<pre><code class="language-python" data-language="python">INSTALLED_APPS = [
    # ...
    "django_tasks",
    "django_tasks.backends.database",  # Stores tasks in your DB
]

# Built-in (Django 6.0) - development only
TASKS = {
    "default": {
        "BACKEND": "django.tasks.backends.immediate.ImmediateBackend",
    },
}

# Third-party backend for prod
# TASKS = {
#     "default": {
#         "BACKEND": "django_tasks.backends.database.DatabaseBackend",
#     },
# }</code></pre>

<p>Doing this uses your database for the queue, which adds extra load to your DB. If you do not like that approach, you can look for another task backend or just keep using Celery. Also, the worker is still a separate process.</p>

<p>But if all of that is not a hard pass for you, consider using Django 6 for tasks. It means you can remove Celery from your <code>requirements.txt</code>, you pip addicts.</p>

<h2>Content Security Policy</h2>

<p>Cross-site scripting and unprotected user input are still a real problem on the web. There are multiple ways to prevent this kind of security issue, like validating user input, but Django also just added a feature I am fully in support of: Content Security Policy.</p>

<p>What is Content Security Policy? It is what helps block bad actors from using data injection to mess with your site.</p>

<p>What kind of data are we talking about? Scripts and images. Imagine some bad actor running a script to fetch data from an endpoint with another user's ID. Dangerous, right?</p>

<p>That is why I think this feature matters. It helps keep the web safer, and honestly, I recommend upgrading just for this alone. It is worth the effort of updating Django.</p>

<p>And how do you use it? Go to <code>settings.py</code> and add this:</p>

<pre><code class="language-python" data-language="python">from django.utils.csp import CSP

# Middleware
MIDDLEWARE = [
    # ... other middleware ...
    "django.middleware.csp.ContentSecurityPolicyMiddleware",
    # ...
]

SECURE_CSP = {
    "default-src": [CSP.SELF],
    "script-src": [CSP.SELF, CSP.NONCE],
    "img-src": [CSP.SELF, "https:"],
}</code></pre>

<p>If you want to learn more about this, click here.</p>

<h2>Template Partials</h2>

<p>Django is evolving to make developers' lives easier with template partials.</p>

<p>Template partials are used to section pages for re-rendering from network requests fetched from the server. They are mostly used for slicing up a page, so when paired with a library like htmx, they push back the need to move to more frontend-focused frameworks like React — and all the constant refreshing and complexity that comes with that whole multi-page app way of building.</p>

<p>But now that Django has adopted a more component-centric workflow, I want them to go further.</p>

<p>I want them to add something similar to Django-cotton — something for composition that makes it easier to build better UI with the Django template language. Template partials and cotton both share the idea of reusability in Django: one is for slicing, and the other is for composing.</p>

<p>So yeah, adding something like Django-cotton into Django core would be nice. It would extend the template system and make it possible to compose UI in a much cleaner way.</p>

<p>If you want to learn more about template partials, click here.</p>

<h2>Conclusion</h2>

<p>There are many other changes in the framework, but these are the main updates and the ones I actually have opinions on.</p>

<p>Hit me up on X or email me if you have any questions.</p>

<p>What's your opinion?</p>

<p>Thanks for reading mine, and stay coding.</p>`;

async function main() {
  await client.execute({
    sql: `UPDATE blog SET content = ? WHERE slug = ?`,
    args: [newContent, 'django-6-is-here-and-honestly-it-looks-good']
  });
  console.log('Content updated successfully!');
}

main();