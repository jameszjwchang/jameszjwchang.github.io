---
layout: post
title: "Running macOS betas in a virtual machine on the current macOS"
date: 2025-6-25 00:00:00 +0800
categories: [Blog]
tags: [Development]
author: James Chang
comments: false
image: macOS-tahoe-intro-view.jpg
image_caption: "From Apple's official macOS Tahoe preview page"
---
<!--more-->

{% if page.image %}

<figure style="text-align: center; margin-bottom: 1.5em;">
  <img src="{{ '/blog/assets/' | append: page.image | relative_url }}" alt="{{ page.title }} image" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  {% if page.image_caption %}
    <figcaption style="font-size: 0.9em; color: #555; margin-top: 0.5em;">{{ page.image_caption }}</figcaption>
  {% endif %}
</figure>
{% endif %}

This is a quick blog post to help others (and definitely me the next time macOS betas roll around) with installing the upcoming macOS's beta in a VM on a MacBook running the current macOS. When I tried installing the VM, I encountered an error with installing the vm that went along the lines of "macOS needs to update in order to install new virtual machine." With the following, this won't happen! Below are the steps to do so:

1. Go to the [Downloads page in the Apple Developer Website](developer.apple.com/download).
2. Scroll down, and find the most recent macOS beta. At the time of writing, that is the second beta for macOS Tahoe. Download the corresponding linked restore image.
![The macOS Tahoe beta 2 download image as seen on the developer page](/blog/assets/Tahoe-beta2-download-page.png "macOS Tahoe beta 2 download page")
3. Scroll down further, and download the Device Support for macOS (26 beta 2, as of writing).
![The device support download page](/blog/assets/Device_Support.png "Device support download page")
    Alternatively, if you are a developer like me, you can just simply go ahead and download the beta Xcode. It includes the device support from supporting all of the simulators and OSes.
4. Use your favorite virtual machine software, and use the restore image to create the beta virtual machine!

And Voila! You now have a functioning VM for the new upcoming macOS. Have fun exploring the new beta!



