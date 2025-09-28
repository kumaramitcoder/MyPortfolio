import express from "../assets/icons/skills/express.svg";
import firebase from "../assets/icons/skills/firebase.svg";
import git from "../assets/icons/skills/git.svg";
import github from "../assets/icons/skills/github.svg";
import gitlab from "../assets/icons/skills/gitlab.svg";
import html from "../assets/icons/skills/html.svg";
import java from "../assets/icons/skills/java.svg";
import javascript from "../assets/icons/skills/javascript.svg";
import kotlin from "../assets/icons/skills/kotlin.svg";
import kubernetes from "../assets/icons/skills/kubernetes.svg";
import materialUi from "../assets/icons/skills/material-ui.svg";
import mongodb from "../assets/icons/skills/mongodb.svg";
import mongoose from "../assets/icons/skills/mongoose.svg"; // Mongoose added
import nodejs from "../assets/icons/skills/nodejs.svg";
import react from "../assets/icons/skills/react.svg";
import redux from "../assets/icons/skills/redux.svg";
import rtkQuery from "../assets/icons/skills/rtk.svg"; // RTK Query added
import sass from "../assets/icons/skills/sass.svg";
import typescript from "../assets/icons/skills/typescript.svg";
import xml from "../assets/icons/skills/xml.svg";
import socket from "../assets/icons/skills/socket.svg";
import reactrouter from "../assets/icons/skills/reactrouter.svg";
import android from "../assets/icons/skills/android.svg";
import ansible from "../assets/icons/skills/ansible.svg";
import aws from "../assets/icons/skills/aws.svg";
import css from "../assets/icons/skills/css.svg";
import docker from "../assets/icons/skills/docker.svg";
import terraform from "../assets/icons/skills/terraform.svg"; // Terraform added
import nextjs from "../assets/icons/skills/nextjs.svg"; // Next.js added
import jenkins from "../assets/icons/skills/jenkins.svg"; // Jenkins added
import vagrant from "../assets/icons/skills/vagrant.svg"; // Vagrant added
import linux from "../assets/icons/skills/linux.svg"; // Linux Server added


import eslint from "../assets/icons/skills/eslint.svg";
import prettier from "../assets/icons/skills/prettier.svg";
import prometheus from "../assets/icons/skills/prometheus.svg";
import mailchimp from "../assets/icons/skills/mailchimp.svg";
import passport from "../assets/icons/skills/passport.svg";
import swagger from "../assets/icons/skills/swagger.svg";

const skills = [
  { name: "Express", img: express, link: "https://expressjs.com/" },
  { name: "Firebase", img: firebase, link: "https://firebase.google.com/docs" },
  { name: "Git", img: git, link: "https://git-scm.com/doc" },
  { name: "GitHub", img: github, link: "https://docs.github.com/en" },
  { name: "GitLab", img: gitlab, link: "https://docs.gitlab.com/ee/" },
  {
    name: "HTML",
    img: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  { name: "Java", img: java, link: "https://docs.oracle.com/en/java/" },
  {
    name: "JavaScript",
    img: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Kotlin",
    img: kotlin,
    link: "https://kotlinlang.org/docs/home.html",
  },
  { name: "Kubernetes", img: kubernetes, link: "https://kubernetes.io/docs/" },
  {
    name: "Material UI",
    img: materialUi,
    link: "https://mui.com/getting-started/installation/",
  },
  { name: "MongoDB", img: mongodb, link: "https://docs.mongodb.com/" },
  { name: "Mongoose", img: mongoose, link: "https://mongoosejs.com/docs/" }, // Mongoose added
  { name: "Node.js", img: nodejs, link: "https://nodejs.org/en/docs/" },
  {
    name: "React",
    img: react,
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Redux",
    img: redux,
    link: "https://redux.js.org/introduction/getting-started",
  },
  {
    name: "RTK Query",
    img: rtkQuery,
    link: "https://redux-toolkit.js.org/rtk-query/overview",
  }, // RTK Query added
  { name: "Sass", img: sass, link: "https://sass-lang.com/documentation" },
  {
    name: "TypeScript",
    img: typescript,
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "XML",
    img: xml,
    link: "https://www.w3schools.com/xml/xml_whatis.asp",
  },
  { name: "Socket.io", img: socket, link: "https://socket.io/docs/v4" },
  {
    name: "React Router",
    img: reactrouter,
    link: "https://reactrouter.com/en/main",
  },
  { name: "Android", img: android, link: "https://developer.android.com/" },
  { name: "Ansible", img: ansible, link: "https://docs.ansible.com/" },
  { name: "AWS", img: aws, link: "https://aws.amazon.com/documentation/" },
  {
    name: "CSS",
    img: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "Docker", img: docker, link: "https://docs.docker.com/" },
  {
    name: "Terraform",
    img: terraform,
    link: "https://www.terraform.io/docs/index.html",
  }, // Terraform added
  { name: "Next.js", img: nextjs, link: "https://nextjs.org/docs" }, // Next.js added
  { name: "Jenkins", img: jenkins, link: "https://www.jenkins.io/doc/" }, // Jenkins added
  { name: "Vagrant", img: vagrant, link: "https://www.vagrantup.com/docs" }, // Vagrant added
  { name: "Linux Server", img: linux, link: "https://www.linux.org/" },
  {
    name: "ESLint",
    img: eslint,
    link: "https://eslint.org/docs/user-guide/getting-started",
  },
  {
    name: "Prettier",
    img: prettier,
    link: "https://prettier.io/docs/en/index.html",
  },
  {
    name: "Prometheus",
    img: prometheus,
    link: "https://prometheus.io/docs/introduction/overview/",
  },
  { name: "Mailchimp", img: mailchimp, link: "https://mailchimp.com/help/" },
  { name: "Passport", img: passport, link: "http://www.passportjs.org/docs/" },
  { name: "Swagger", img: swagger, link: "https://swagger.io/docs/" },
];

export default skills;
