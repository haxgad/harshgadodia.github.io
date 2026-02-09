---
layout: page
title: Quotes
permalink: /quotes/
favicon: "💭"
description: "A collection of inspiring and thought-provoking quotes curated by Harsh Gadodia from figures including Einstein, Twain, Jobs, and others on life, technology, and wisdom."
---

{% for quote in site.data.quotes %}
  {% include card.html type="quote" text=quote.text author=quote.author %}
{% endfor %}
