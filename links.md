---
layout: page
title: Links
permalink: /links/
favicon: "🔗"
description: "Curated collection of valuable resources on technology, personal development, and software engineering. Includes links to essential articles, guides, and tools for developers and tech enthusiasts."
---

<div class="content-container">
  <p style="margin-bottom: 25px; line-height: 1.8;">Here are some links that you might also enjoy.</p>

  {% for group in site.data.links %}
  <h2 class="section-title">{{ group.section }}</h2>
  <div class="links-list">
    {% for link in group.items %}
    <div class="link-item"><a href="{{ link.url }}" target="_blank">{{ link.title }}</a></div>
    {% endfor %}
  </div>
  {% endfor %}
</div>
