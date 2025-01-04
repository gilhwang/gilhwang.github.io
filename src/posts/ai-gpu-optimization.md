---
title: AI GPU Optimization
description: Optimized an AI simulation algorithm using NVIDIA GPU 
id: 1
categories:
    - NVIDIA CUDA
    - C/C++
    - Teamwork
    - Parallel Programming
    - GPU
icon: fa-solid fa-microchip
start_date: "April 2024"
end_date: "Present"
published: true
---

# Overview

The **AI GPU Optimization** project optimizes the execution speed of an AI simulation algorithm using Graphics Processing Unit (GPU). The AI simulation algorithm is developed by a start-up company, PRE. The project aims to fully exploit the parallelism of GPU in order to run the simulation algorithm in parallel.

This project is done as a team with Tarun Misra and Ines Qian. It is a Engineering Design Project at University of Toronto.

# Background

**PRE** is a start-up company founded by Prof. Parham Aarabi at University of Toronto. The main product is an AI simulation algorithm that "simulates" E-commerce website using AI-generated virtual shoppers. Here, "simulate" means that it can predict how profitable a website is based on its UI/UX design, etc. The virtual shoppers is modeled based on human behaviours, and efficiently analyzes a website's cart rate, conversion rate, etc.

Visit [PRE website](https://hello.pre.cm/) for more detailed information!

# Motivation

Based on the Law of Large Numbers, analysis based on more virtual shoppers means more accurate result. However, when virtual shoppers are generated, the current PRE AI algorithm runs each virtual shopper sequentially. This means that the first virtual shopper should finish its "shopping" before a second shopper runs, the second shopper should  finish before a third shopper runs, and so on. This is **slow**, especially when millions and billions of virtual shoppers are generated! 

Thankfully each virtual shopper does not depend on each other, so theoretically it is possible to run all virtual shoppers in parallel, and aggregate the results later. Here is where the power of GPU can be leveraged, by exploiting its parallel nature of hardware. The GPU is a perfect device that is designed to run independent tasks in parallel. 

# Project Goal

The goal of this project is to use the GPU to optimize the current PRE AI simulation algorithm such that the optimized program is <u>10 times faster</u> than the original.

# Overall Design

![design](../../images/aigpu/design.png)

Given a total of N virtual shoppers, each shopper is run with each GPU thread. As a result, a total of N GPU threads are created and executed in parallel. The program will wait until all N threads finish its execution. At the end, the simulation result for all N shoppers are aggregated and reported as the final result. Here a "kernel" means a function that runs on the GPU (instead of the CPU).

# Device Requirements

Throughout working on this project, the following device requirements are followed. This is based on the development environment provided by PRE.

| Requirement | Description |
| --- | --- |
| GPU | NVIDIA Tesla T4 GPU |
| Operating System | Linux Ubuntu 18.04 |
| CPU  | Intel(R) Xeon(R) Platimum 8259CL GPU @ 2.50 GHz |
| CUDA Compiler Driver Version | 11.0 |
| CUDA Compute Capability | 7.5 |

# Result

In a development environment with 1 million virtual shoppers, the optimized GPU program is <u>**108.5 times faster**</u> than the original.

|  | Total Execution Time |
| --- | --- |
| CPU | 31937.9 ms |
| GPU | 294.2 ms|
<br/>

In a producttion environment with the same number of shoppers, the optimized GPU program is <u>**24 times faster**</u> than the original. The slowup is mainly due to other overhead, such as reading and processing the website data (during development, a pre-processed website data was used).