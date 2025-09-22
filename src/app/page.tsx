'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Server, Cloud, Shield, Code2 } from 'lucide-react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Terraform Cloud Platform",
    description: "Built reusable Terraform modules for VPC, EKS, RDS, and IAM with least-privilege. Multi-env deployment with GitHub OIDC.",
    tech: ["Terraform", "AWS", "GitHub Actions", "OIDC", "Terragrunt"],
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    title: "Kubernetes Platform Engineering",
    description: "Designed GitOps workflow with ArgoCD, implemented autoscaling (HPA), canary rollouts, and comprehensive observability.",
    tech: ["Kubernetes", "Helm", "ArgoCD", "Prometheus", "Grafana"],
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: "DevSecOps Pipeline",
    description: "Security-by-design CI/CD with policy-as-code checks, image scanning, and secrets management.",
    tech: ["OPA", "Trivy", "SOPS", "Sealed Secrets", "GitHub Actions"],
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Python Automation Toolkit",
    description: "CLI tools for rotating credentials, cleaning unused resources, tagging policies, and cost reports.",
    tech: ["Python", "Boto3", "Azure SDK", "Click", "Pytest"],
    icon: <Code2 className="w-8 h-8" />,
  },
];

const skills = [
  "AWS (EKS, EC2, VPC, IAM, RDS, S3)",
  "Azure (AKS, ACR, Azure DevOps)",
  "Terraform & Terragrunt",
  "Kubernetes & Helm",
  "Docker & Containers",
  "GitHub Actions & Jenkins",
  "ArgoCD & GitOps",
  "Prometheus & Grafana",
  "Python & Bash Scripting",
  "OIDC & IAM Security",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sahaya Clement Vincent Martin
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              🚀 DevOps Engineer | ☁️ Cloud/Platform Engineer | 🛡️ Cloud Security-minded
            </p>
            <p className="mt-4 text-base leading-7 text-gray-400 max-w-2xl mx-auto">
              DevOps and Cloud Engineer with a strong foundation in automation, infrastructure-as-code, and platform engineering. 
              I design and operate secure, scalable CI/CD platforms using Terraform, Kubernetes, and GitHub Actions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-x-6"
          >
            <a
              href="https://www.linkedin.com/in/sahaya-clement/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://clementvsc.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Portfolio
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              🛠️ Core Skills
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
              >
                <span className="text-sm font-medium text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              🚀 Featured Projects
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 text-primary-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              📞 Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Based in Toronto, Ontario, Canada. Available for Full-Time opportunities (Remote/Hybrid/On-Site).
            </p>
            
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/sahaya-clement/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://clementvsc.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Portfolio
              </a>
              <a
                href="mailto:clementvsc.martin@gmail.com@student.humber.ca"
                className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-8 border-t border-white/20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-gray-400">
            ⭐️ If this resonates, feel free to star or connect!
          </p>
        </div>
      </footer>
    </div>
  );
}
