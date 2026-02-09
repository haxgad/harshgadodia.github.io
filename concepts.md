---
layout: page
title: Concepts
permalink: /concepts/
favicon: "💡"
description: "Explore interesting concepts and psychological phenomena curated by Harsh Gadodia, including the Dunning-Kruger Effect, Imposter Syndrome, and thought-provoking articles."
---

{% for concept in site.data.concepts %}
  {% include card.html url=concept.url title=concept.title description=concept.description subtitle=concept.example %}
{% endfor %}
