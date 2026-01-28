---
layout: page
title: Blog
permalink: /blog/
description: "Personal reflections and insights from Harsh Gadodia on tech, travel, and professional growth. Read about experiences in the Bay Area, Japan, and more."
published: false
---

<style>
  .blog-container {
    padding-left: 0;
  }
  
  .blog-card {
    background-color: #2a2a2a;
    border-left: 3px solid #5a5af0;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 15px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  
  .blog-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  .blog-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .blog-title a {
    color: #e6e6e6;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .blog-title a:hover {
    color: #5a5af0;
    text-decoration: none;
  }
  
  .blog-description {
    color: #a3a3a3;
    font-size: 14px;
    margin: 0;
    display: none;
  }
</style>

<div class="blog-container">
  {% for post in site.posts %}
    <div class="blog-card">
      <div class="blog-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </div>
      <p class="blog-description">{{ post.description }}</p>
    </div>
  {% endfor %}
</div>
