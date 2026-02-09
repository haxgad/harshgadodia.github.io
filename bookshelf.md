---
layout: page
title: Bookshelf
permalink: /bookshelf/
favicon: "📚"
description: "Browse Harsh Gadodia's reading recommendations and connect on Goodreads. Discover books on technology, leadership, philosophy, and personal growth."
---

<style>
  .goodreads-container {
    margin: 20px 0;
    width: 100%;
  }

  .gr_grid_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(98px, 1fr));
    grid-gap: 10px;
    max-width: 100%;
  }

  .gr_grid_book_container {
    width: 98px;
    height: 160px;
    overflow: hidden;
    position: relative;
    background-color: #2a2a2a;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out;
  }

  .gr_grid_book_container:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .gr_grid_book_container img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 600px) {
    .gr_grid_container {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }

    .gr_grid_book_container {
      width: 80px;
      height: 130px;
    }
  }
</style>

<div class="goodreads-container">
  <div id="gr_grid_widget_1715093350">
    <div class="gr_grid_container" id="gr_grid_books"></div>
  </div>
</div>

<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.goodreads.com/review/grid_widget/122474111.json?cover_size=medium&hide_link=&hide_title=&num_books=20&order=d&shelf=read&sort=date_added&widget_id=1715093350')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        return response.json();
      })
      .then(data => {
        const container = document.getElementById('gr_grid_books');
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data.html, 'text/html');
        const books = htmlDoc.querySelectorAll('.gr_grid_book_container');
        books.forEach(book => {
          container.appendChild(book.cloneNode(true));
        });
      })
      .catch(error => {
        console.error('Error loading Goodreads data:', error);
        document.getElementById('goodreads-fallback').style.display = 'block';
      });
  });
</script>

<div class="card" id="goodreads-fallback" style="display:none;">
  Unable to load data. View my profile directly at <a href="https://www.goodreads.com/user/show/122474111" target="_blank">goodreads.com/user/show/122474111</a>
</div>

<div class="card">
  Connect with me on <a href="https://www.goodreads.com/user/show/122474111" target="_blank">Goodreads</a>
</div>
