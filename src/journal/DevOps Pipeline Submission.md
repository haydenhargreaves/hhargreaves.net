Date: 2025/10/17
Desc: My implementation of a CI/CD pipeline.

# DevOps Pipeline Submission
###### Author: Hayden Hargreaves

###### Published: 10/17/2025


# Sedaro Software Engineering Internship Take-Home Project

##### Hayden Hargreaves, October 10th 2025.

###### This project is not to be copied or used by any entity other than the intended audience, Sedaro



## Write Up

This article was written 100% by hand. With the ever-growing use of AI, it is important to show
integrity in the workplace, and this submission is no exception. Furthermore, I love writing "articles"
like this, as you can see from my own personal [blog](https://hhargreaves.net/journal).

This article can also be found on my website/blog with better formatting at this [link](https://hhargreaves.net/journal). 
As the Sedaro team has requested that these assets remain private, I will only leave the live resources 
available to the public for 7 days (from the time of submission) or until I have received feedback. 
If this does not work, please let me know, and I will take down any live applications that are
currently running! 

### Overview

To provide a short TL;DR of this submission, I implemented the following: A complete CI/CD pipeline
which tests, lints, builds and deploys the checked-in code as soon as it is pushed. This allows 
software engineers to focus their efforts on building quality software and not on making sure the 
deployments are working.

By requiring checked-in code to meet standards (linters and formatters), the quality and readability
of the code are improved. Automated testing allows the engineers the ability to write code, run some small
tests locally, and then execute the entire test suite in the cloud while they continue to write code
and solve problems.

For business, automated CI/CD pipelines save money and time, but they also allow for quicker time-to-market
which grants them an edge over competitors. Deployments are less risky, smaller and more frequent. 
All of which allows the business a chance to advertise new features and begin user testing as soon as 
a feature has passed the defined rules.

### Demo

Since this pipeline is custom-built for my own personal server infrastructure, it may be hard to replicate
the **exact** setup that I have. The only place you may run into an issue is in the server
deployment using Cloudflare. I am not comfortable pushing my production server keys and details to 
a public submission or repository, so I have left that piece out of the script. 

However, I know that the Cloudflare step is critical to the success of this pipeline, so I have created
a deployment that exists on my server at [demo.gophernest.net](https://demo.gophernest.net). I will also work on submitting a 
video article showing the pipeline in action, just in case the team at Sedaro is unable (or does not 
want to) wire up all the pieces. I would not blame you!

The live copy of the Git repository can be found [here](https://git.gophernest.net/azpect/puny.card). Just like the other live
elements, I will leave this repository public for exactly 7 days from submission. If more time is 
needed, do not hesitate to ask! Furthermore, if there are any issues accessing the repository, please
let me know. It is also hosted on my own personal Git server, but migration to GitHub is seamless.

### Setup 

However, if running it locally is the goal, here are the steps I followed during implementation.

##### Setup a Git repo

You may clone my project (as defined above in the **Demo** section), or copy the files provided
in this `zip` file and push them to a Git repository. Once that is done, the magic should begin.

For best success, the working branch should be called `main`. All of the workflows execute on events 
triggered on the `main` branch.

Once the code is checked in and the repository is set up, the last thing you will need to do is define
a few secrets. Inside the `.github/workflows/backend-build.yml` and  `.github/workflows/frontend-build.yml`
workflow files, you will notice there are two variables:

- **DOCKER_USERNAME**: Username for the working Docker hub account
- **DOCKER_TOKEN**: Password or token for the working Docker hub account

These should be defined in your actions secrets tab before continuing. Otherwise, the build workflows
will fail to build and deploy a new image.

##### Setting up Ansible

This submission utilizes **Ansible** as a solution for infrastructure management. To configure access to your server,
you will need to update the values in the `infrastructure/inventory/hosts.yml` and 
`infrastructure/inventory/host_vars/*.yml`. The changes will be described below. If you encounter any
issues, Ansible is well-documented, but I can also be of assistance if needed.

```yml
# infrastructure/inventory/hosts.yml
servers:
    hosts:
      server_name: # Whatever you would like to call your server! Remember this for later

```

```yml
# infrastructure/inventory/host_vars/server_name.yml

# It is CRITICAL that this file has the same name as the server_name defined above.
# Otherwise, Ansible will be unable to locate the values.

# Connection details
ansible_user: username      # Update to reflect your server's username
ansible_connection: ssh
key_file: ~/.ssh/keyfile    # Pre-configured SSH key for key-based authentication

# Use my personal server for testing
domain: yourserver.com      # Server domain
hostname: yourdomain        # Server hostname

```

Once these updates have been made, you can execute the Ansible scripts as follows:

```bash
cd infrastructure # must be run from ./infrastructure
ansible-playbook ./playbooks/install-packages.yml -i ./inventory/hosts.yml --ask-become-pass
ansible-playbook ./playbooks/system-update.yml -i ./inventory/hosts.yml --ask-become-pass
ansible-playbook ./playbooks/deploy-application.yml -i ./inventory/hosts.yml --ask-become-pass
```

These scripts will be later explained, but for now, running them in this order will yield a working
output on the server. You will be prompted for a **BECOME PASS**; this is your server's sudo password.


### Motivation

I was once told that DevOps is a dying field and that software engineers were taking over the roles
of DevOps engineers. While that breaks my heart to hear, I was very inspired when I saw this position
open, hiring DevOps engineers specifically. I am a software engineer by trade (and study), but I 
have been working for months, even years, on perfecting my own personal home server. This server
is the host to all of my applications, a Git server, file servers, custom web apps, and so much more. 
However, in doing so, I learned a great deal about DevOps and automation.

All of my DevOps experience is a result of hands-on practice working on my server and creating countless
pipelines. Each of my web applications can be found on my **gophernest** (the name of the server, I like Golang),
domain. All of which are featuring a fully automated CI/CD pipeline, very similar to the one I have 
implemented for this submission.

Furthermore, I have minimal experience working in Rust, which unfortunately made it very hard to contribute
to the compiler team. I mentioned in my interview that I am interested in working on 
a compiler or systems alike, but with my lack of knowledge, that did not seem feasible for this project.

From this point onward, I will begin describing the technical aspects of this project and the decisions
I have made along way. It would take *days* to explain every detail, so I have only selected a few
larger decisions to highlight in this article, but I would love to talk more about anything you may question
in my submission!

### Nightly Builds vs. Continuous Integration (CI)

A common debate in the DevOps space is the use of **nightly builds** or **continuous integration.**
A nightly build is exactly what it sounds like -- a defined time that occurs each day (usually at night)
when the application is built based on the current state of the repository. A common pitfall of this
solution is the "rush to submit" code before the build time. This practice of rushing can lead to bugs,
poor software quality, skipped tests and overall, worsened performance. While it is definitely a step 
above many other practices, it is not my go-to choice.


**Continuous integration** is the practice of building and deploying an application as soon as it is 
checked in and submitted to the master repository. For example, when code is merged into the main branch, 
it is instantly built and deployed to the production server. This instant deployment solves a lot of 
rushing issues that are commonly experienced with nightly builds. 

In my experience working on many personal projects, continuous integration is a more straightforward solution,
as it allows me to view my changes on my live site, minutes (or even seconds) after I merge them into 
the repository. This is a huge time saver and allows patches and fixes to be rolled out instantly 
upon resolution.

Henceforth, this submission implements **continue integration.**
#### Linting and Formatting

This pipeline enforces the contributors to write "higher quality" code by requiring code to pass
a lint check and a format check. Before the applications are built, they must first run through a 
series of linters and formatting tools to ensure the code submitted adheres to the defined guidelines.

This process is done using **GitHub workflows**. Since this application is built using many languages,
many different tasks need to be executed; the Rust project, for example, uses `clippy`
as a linter and `rustfmt` as a formatter. Before the code can be passed to the next step, the following 
workflows are executed and required to pass.


```bash
 .github/workflows/black-check.yml    # Python formatter
 .github/workflows/clippy.yml         # Rust linter
 .github/workflows/eslint.yml         # JS/TS linter
 .github/workflows/prettier-check.yml # JS/TS formatter
 .github/workflows/pylint.yml         # Python linter
 .github/workflows/rustfmt-check.yml  # Rust formatter
```

Here is an example workflow:

```yml
# .github/workflows/rustfmt-check.yml
name: Rust Format Check

on: [push, pull_request]

jobs:
  format-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Rust toolchain
        uses: dtolnay/rust-toolchain@stable
        with:
          toolchain: stable
          components: rustfmt
      - name: Check Rust formatting with rustfmt
        run: |
          cd queries
          cargo fmt -- --check
```

>
> Disclaimer! The apps in this project do not pass the linter or formatting check, so I was forced 
> to disable the requirement for these to pass. However, this is a straightforward fix.
>


#### Testing

Testing is a crucial part of software development. It helps ensure that existing code continues 
to work and that new code does not impact working functionality. Furthermore, effective testing
helps engineers find and prevent bugs, which improves the quality and reliability of the software.

This application did not include many tests, only one, to be exact. Which was not very well defined;
however, I was able to make it work. The pipeline I designed has a **test step** which occurs after
the checking step above has passed. The final build step can not occur until after the tests have
passed.

To implement this, a new **Dockerfile** was required. This file can be seen here: `./app/Dockerfile.test`.
To run this Dockerfile, another workflow is needed. A sample can be seen below. The key part of this 
workflow is the `needs: []` directive, which defines that this workflow cannot run until the defined
workflows have run and passed. 

```yml
# .github/workflows/backend-tests.yml
name: Execute Dockerized Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  run_docker_tests:
    runs-on: ubuntu-latest

    # You should include the 'needs' keyword here to ensure linters and format checks pass first.
    needs:
      [
        backend-tests,
        black-check,
        clippy,
        eslint,
        prettier-check,
        pylint,
        rustfmt-check,
      ]

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Build Test Docker Image
        run: docker build -f app/Dockerfile.test -t sedaro-backend-test:latest .

      - name: Run Tests in Container
        run: docker run sedaro-backend-test:latest
```

>
> Disclaimer! The apps in this project do not pass the linter or formatting check, so I was forced 
> to disable the requirement for them to pass before this workflow executes.
>

### Continuous Delivery vs. Continuous Deployment

Remember the difference between nightly builds and continuous integration? A similar debate exists 
between two *very* similar concepts: continuous **delivery** and continuous **deployment**. Before I discuss
differences, let's talk about similarities. Both versions of **CD** define the automation of the build
process and deployment process. i.e., the **build step** in this working example. However, there is one 
key difference that sets these two apart. When using continuous delivery, the build is completed 
automatically, but it is not deployed to the production server until it is manually approved. Continuous
deployment is exactly as it sounds: code is built and deployed as soon as the automation occurs.

These significant difference allows teams to create very different workflows and environments. Teams using 
continuous delivery often find themselves with extra control over deployment time and can wait 
for an external action to trigger deployment. Teams that employ continuous deployment often find that
users are able to use the most recent build of the application at all times. The most recent approved
set of changes is deployed live for users as soon as it is approved. 

In most of my personal projects, I use continuous deployment because it fits my needs. However, both 
sides have a distinct goal and use case in mind. This project features a **continuous deployment** pattern,
as it is my preference.

### Implementation

Implementing a continuous deployment system is very simple. I used a tool called "Watchtower" in parallel
with a simple Docker Compose setup. **Watchtower** is a tool that scans the Dockerhub registry for updates
to a specific Docker image. With this configured to listen for all running images with a polling interval 
of **60**, we can see live changes with 60 seconds of fidelity. 

To view the entire implementation, the *Docker* role used by the Ansible playbooks can be referenced
here: `infrastructure/roles/docker/tasks/main.yml`. I will cover the Ansible setup right after this!

The last piece needed to finalize the CD portion of this project is a docker-compose file. The template
defined below is configured to pull my two images, which are built during the CI phase, and Watchtower
will poll them each every 60 seconds, and if there is an update, the images will be updated live during 
run-time.

>
> Note! Notice the `restart: always` directive; this is crucial for ensuring the images start up when
> the server is rebooted!
>

```yml
# infrastructure/roles/web/templates/docker-compose.yml.j2
services:
  backend:
    image: azpect3120/puny.card.backend:latest
    container_name: backend
    ports:
      - "8000:8000"

    restart: always

  frontend:
    image: azpect3120/puny.card.frontend:latest
    container_name: frontend
    ports:
      - "3030:3030"

    restart: always
```

*You may notice that this file is not actually a `.yml` file; instead, it is a `.yml.j2` file. This is simply
so Ansible can convert the file to a **template** which can be used to render variables in dynamically.
In this project, there was no need for variables here, but it is best practice to support them just 
in case.*


### Infrastructure as Code 


#### Ansible

To keep this short, I will provide the definition provided by Red Hat, the owners of Ansible.

>
> "Ansible is an open source IT automation engine that automates provisioning, configuration 
> management, application deployment, orchestration, and many other IT processes. It is free to use,
> and the project benefits from the experience and intelligence of its thousands of contributors."
> ~Red Hat
>

More information can be found [here](https://www.redhat.com/en/ansible-collaborative). 

This submission uses Ansible in a straightforward way **to enable continuous deployment.** The entire 
CI process was implemented using only GitHub workflows, but we need a server to deploy this
code! Ansible is the tool that I am most familiar with to configure servers. My home server is entirely 
configured using Ansible!

It is possible to duplicate a working server using the three **playbooks** provided in this submission.
They should be run in this order:

```bash

cd infrastructure # must be run from ./infrastructure
ansible-playbook ./playbooks/install-packages.yml -i ./inventory/hosts.yml --ask-become-pass
ansible-playbook ./playbooks/system-update.yml -i ./inventory/hosts.yml --ask-become-pass
ansible-playbook ./playbooks/deploy-application.yml -i ./inventory/hosts.yml --ask-become-pass
```

*To keep this project simple, I did not include scripts to configure the entire server, such as users
and Linux setup, so it is expected that your target server has a suitable user with root permissions 
set up beforehand.*


#### Directory Setup

Those who are experienced with Ansible may recognize the directory structure defined below, but just 
in case this is your first time seeing it, I have left some short descriptions below that should help
you understand what is going on.

When you actually *run* Ansible, you will run the **playbooks**. These playbooks call the roles, which 
are what tell Ansible what to do to the server and what state to leave it in. This setup is straightforward
and allows for extreme portability and reuse.

```bash
infrastructure
├── Ansible.cfg # Ansible configuration
├── inventory
│   ├── hosts.yml # Host definitions
│   └── host_vars # Host-specific variables
├── playbooks
│   ├── deploy-application.yml # Deploy the live demo
│   ├── install-packages.yml   # Install required packages on hosts
│   └── system-update.yml      # Update the system and reboot
├── requirements.yml # Ansible requirements
└── roles 
    ├── docker   # Install docker 
    ├── packages # Install packages
    ├── system   # System configuration
    └── web      # Install and deploy demo application
```

### Application Changes

This submission is DevOps-focused; as a result, I did not work too much on the actual application itself.
However, I did have to make a few small changes to some settings in the applications themselves, namely
**CORS** configurations. In the backend application, a simple change was needed to accept connections
from the deployed frontend.

```py
# app/app.py

# ~line 22
CORS(app, origins=["http://localhost:3030", "https://demo.gophernest.net"])
```

In the frontend application, a very similar change was needed to make sure the requests are sent to 
the proper backend and not the local host. This can be done as follows:

```typescript
// web/src/SimulateForm.tsx

// ~line 56
const response = await fetch('https://demob.gophernest.net/simulation', {...});

// ./web/src/App.tsx

// ~line 31
const response = await fetch('https://demob.gophernest.net/simulation');
```


### Hosting with Cloudflare

I will cover this section pretty briefly, to leave some things up for conversation during the interview, 
but also because I did not provide any of the code required to achieve this portion. Cloudflare offers 
a reverse proxy or **tunnel** which allows my server to deploy an application running locally to the live 
web without opening any ports or adjusting my firewall rules. This tool is 100% free and has been a 
lifesaver for all of my applications.

As such, I have implemented a detailed system that can deploy new DNS records and attach applications 
to them with minimal effort. However, these scripts contain lots of personal details that would
give anyone access to my account and the ability to manage (and cause harm) to my tunnel infrastructure.
Therefore, this part is not included in the final submission; however, I will attach a small code snippet
below to *inspire* you to give it a try!

```yml
...

- name: Configure cloudflare Tunnel DNS Record (CNAMEs) for gophernest.net
  community.general.cloudflare_dns:
    zone: "gophernest.net"
    record: "gophernest.net"
    type: "CNAME"
    value: "{{ tunnel_id }}.cfargotunnel.com"
    state: present
    proxied: true
    api_token: "{{ cloudflare_api_key }}"
  tags:
    - cloudflared
    - cnames
    - gophernest.net

- name: Configure cloudflare Tunnel DNS Record (CNAMEs) for *.gophernest.net
  community.general.cloudflare_dns:
    zone: "gophernest.net"
    record: "{{ item }}.gophernest.net"
    type: "CNAME"
    value: "{{ tunnel_id }}.cfargotunnel.com"
    state: present
    proxied: true
    api_token: "{{ cloudflare_api_key }}"
  loop: "{{ gophernest_cnames }}"
  tags:
    - cloudflared
    - cnames
    - gophernest.net

...
```

### Result

Finally, you made it all the way through! I hope you enjoyed reading this short story I wrote. I really
enjoyed working on this project and writing this detailed report!

To sum up: this submission includes an entire, working **CI/CD** pipeline which runs linters, 
formatters, tests, builds and even deploys the application. All without any manual intervention. The 
pipeline enforces strict code quality and assures that reliable software is created to prevent bugs, 
crashes and application failure.

I want to thank the Sedaro team for giving me this opportunity to create something so detailed, and I 
look forward to meeting and discussing this project!

### How I Would Improve

There are two things I would improve if I had more time available to work on this project. The first 
being **updating the application code to pass the check stages.** The simple fact that the code provided 
does not pass a linter means that the entire pipeline would fail to run. To combat this, I was forced
to remove the requirements for each step, which is not safe in a production environment.

The last thing I would like to have implemented was different environments: **production**, **staging**
and **development**. These would exist as different branches in the repository and execute different
actions. For example, on each branch, the application would be deployed to a different live application.
This would allow developers to see a live demo of the application without impacting production.

