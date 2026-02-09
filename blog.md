---
layout: page
title: Blog
permalink: /blog/
favicon: "✍️"
description: "Personal reflections and insights from Harsh Gadodia on tech, travel, and professional growth. Read about experiences in the Bay Area, Japan, and more."
published: false
---

{% for post in site.posts %}
  {% include card.html link=post.url title=post.title %}
{% endfor %}
