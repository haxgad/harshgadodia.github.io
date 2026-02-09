---
title: "Introducing Engineering Intelligence Tooling: A Journey"
description: "Lessons learned from introducing developer analytics and engineering metrics tooling, including building trust, addressing concerns, and balancing data with empathy."
pubDate: 2025-03-25
draft: true
tags: ["engineering", "management"]
---

A couple of years ago, I was tasked with introducing **engineering intelligence tooling**—also known as **developer analytics platforms**, **engineering metrics dashboards**, or **productivity insights tools**—to better understand how developers spend their time. The goal was to leverage data to improve engineering workflows, identify inefficiencies, and provide better support to our engineering teams.

However, I soon realized that this initiative was not just about selecting the right tool, but about earning the trust and buy-in from the engineers.

---

## Challenges and Learning Curve

Introducing engineering intelligence tooling was a novel endeavor for our team, requiring us to conduct extensive independent research to understand the best practices and potential pitfalls.

As this tooling was relatively new, there were limited resources and case studies available, which meant we had to rely heavily on our own experimentation and learning.

One of the significant challenges we faced was dealing with **teething issues**, particularly when integrating with various platforms.

**Data integrity issues** were a common hurdle, as discrepancies between different data sources sometimes led to inaccurate insights. Ensuring the accuracy and reliability of the data required meticulous validation and cross-checking, which was both time-consuming and resource-intensive.

Despite these challenges, the process of overcoming these initial hurdles provided valuable learning experiences and helped us refine our approach to using engineering intelligence tools effectively.

---

## The Need for Engineering Intelligence

The need for these tools arose from several challenges that engineering teams often face as they scale.

Traditional 1:1 meetings relied on **anecdotal feedback** and **subjective impressions**, making it difficult to get an objective view of how engineering time was being spent.

With teams growing and projects becoming more complex, there was a need for a more structured approach to understanding productivity and areas of improvement.

By bringing **data into our coaching conversations**, we could better understand how developers allocate their time—whether they're bug fixing, reviewing code, or working on new features.

This insight helped engineering managers (EMs) provide more targeted coaching, reduce the risk of burnout, and ensure a more balanced workload across teams.

Furthermore, these tools helped us make **management less subjective and more data-driven**, leading to fairer decision-making.

---

## Addressing Concerns and Building Trust

Despite the potential benefits, the introduction of engineering intelligence tooling was met with significant resistance—especially from junior engineers.

Many feared that the tool would create an environment of **unhealthy competition**, **gamification**, and **micromanagement**. They were concerned that the data could be used to rank engineers or make employment decisions based on arbitrary metrics.

These concerns were valid, and it was essential that we addressed them head-on.

### Common Concerns Raised by Engineers

- **Gamification**
  Engineers feared that knowing their work was being measured might encourage them to optimize for numbers rather than meaningful contributions.
  **Solution**: Engineers can only access their data with their EMs, removing any temptation to game the system. We emphasized that data would be used for coaching—not ranking.

- **Reduced Collaboration**
  There was concern that measuring productivity could discourage collaboration and mentoring.
  **Solution**: We recognized and valued non-coding contributions—like mentoring and reviewing—as critical activities, on-par with code commits.

- **Unhealthy Competition**
  Engineers worried the tool would create a competitive atmosphere that undermined teamwork.
  **Solution**: Engineers can't see other's data, and managers were trained to use data for support, not competition.

- **Fear of Misuse**
  The most emotional concern was that data would be used punitively.
  **Solution**: We assured engineers that data would never be used in isolation to make critical decisions. The goal was coaching, not punishment.

---

## Building Empathy and Maintaining Human Connection

While the tool provided valuable data, **empathy and human connection** remained central to our approach.

The real value of engineering management lies in understanding the **person behind the code**.

We reinforced this through several initiatives:

- **1:1 Conversations**
  We personally spoke with engineers who had strong concerns, making sure they felt heard and understood.

- **Manager Training**
  EMs were trained to interpret the data responsibly, with a focus on **support and coaching**, not evaluation.

- **Psychological Safety**
  We continuously emphasized that the tool was meant to **help engineers thrive**, not to scrutinize them.

---

## Data Sources and Integration

For the tool to be effective, it needed to pull data from multiple sources across the engineering workflow:

- **Version Control Systems** (GitHub, GitLab, Bitbucket):
  Commit activity, PR cycles, reviews.

- **Issue Tracking Systems** (Jira, Linear, Asana):
  Correlates engineering effort with project management tasks and backlog movement.

- **CI/CD Pipelines** (Jenkins, GitHub Actions, Bamboo):
  Deployment frequency and build failures.

- **Code Review Platforms** (Bitbucket, GitHub PRs):
  Review participation, review time, and PR cycles.

- **Incident Management Tools** (PagerDuty, Opsgenie, Sentry, Datadog):
  Time spent on incidents and firefighting.

By aggregating this data, we were able to generate **comprehensive insights** into engineering activity and team performance.

---

## Common Outliers — And Why They're Not Necessarily Bad

In any dataset, outliers are inevitable. But in engineering intelligence, outliers are often signals—not noise.

For example:

- An engineer who takes longer to review PRs might be **mentoring** or ensuring **thoroughness**.
- An engineer with fewer commits might be solving **deep, complex problems**.

These outliers can represent valuable behaviors that don't show up in traditional metrics.

Rather than penalizing them, we zoomed in to understand **why** these patterns existed—and used them to provide better support.

---

## Conclusion

After two years of using engineering intelligence tooling, we've seen a positive impact on our teams.

These tools have helped us make more **data-informed decisions**, better support our engineers, and improve workflows.

But they're just that—**tools**.

The real value comes from how we use them: to foster **trust**, **collaboration**, and **continuous improvement**.

By balancing data with empathy, we've created an environment where developers can thrive—knowing their growth and well-being are top priorities.
