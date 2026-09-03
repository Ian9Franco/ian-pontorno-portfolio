"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { fira } from "@/lib/utils"

export default function MimCaseStudyPage() {
  const { language } = useLanguage()
  const isEs = language === "es"

  return (
    <main className="min-h-screen bg-black text-neutral-200 py-12 px-6 sm:px-8 selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Navigation / Back link */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>{isEs ? "Ian Pontorno / Portafolio" : "Ian Pontorno / Portfolio"}</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className={`${fira.className} text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/25`}>
              {isEs ? "Caso de Estudio Flagship" : "Flagship Systems Case Study"}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center p-2.5 shadow-xl shadow-indigo-500/10">
              <Image
                src="/images/projects/mim.png"
                alt="MIM Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                MIM — Minecraft Intelligent Manager
              </h1>
              <p className={`${fira.className} text-sm sm:text-base text-indigo-400 font-medium tracking-tight mt-1`}>
                {isEs ? "Plataforma Modular de Ingeniería de Sistemas" : "Modular Systems Engineering Platform"}
              </p>
            </div>
          </div>

          <p className="text-lg text-neutral-300 leading-relaxed font-normal">
            {isEs
              ? "Una plataforma modular de escritorio y nube construida alrededor de la infraestructura de entornos complejos de Minecraft."
              : "A modular systems platform built around Minecraft infrastructure."}
          </p>

          {/* Discipline Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Systems Engineering",
              "Applied AI",
              "Distributed Systems",
              "Security",
              "Binary Safe Recovery"
            ].map((tag) => (
              <span
                key={tag}
                className={`${fira.className} text-xs font-medium px-3 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://mim-hub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/20"
            >
              <span>{isEs ? "Ver Proyecto → MIM Hub" : "View Project → MIM Hub"}</span>
              <span>↗</span>
            </a>
            <a
              href="https://github.com/Ian9Franco/MIM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-neutral-200 border border-white/[0.12] transition-all"
            >
              <Image
                src="/icons/readme.png"
                alt="GitHub"
                width={16}
                height={16}
                className="opacity-80"
              />
              <span>{isEs ? "Repositorio GitHub" : "GitHub Repository"}</span>
              <span>↗</span>
            </a>
          </div>
        </motion.section>

        {/* Lead Summary Callout */}
        <section className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/30 via-neutral-900/40 to-neutral-950 border border-indigo-500/20 shadow-inner">
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed italic">
            {isEs
              ? "“MIM comenzó como una herramienta de gestión para Minecraft y evolucionó hacia una plataforma de ingeniería de sistemas enfocada en confiabilidad, diagnóstico determinista, almacenamiento eficiente, sincronización distribuida y seguridad.”"
              : "“MIM started as a Minecraft management tool and evolved into a systems engineering platform focused on reliability, diagnostics, storage, synchronization and security.”"}
          </p>
        </section>

        {/* Section 1: The Engineering Challenge */}
        <section className="space-y-4 border-t border-white/[0.08] pt-12">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-indigo-400 font-mono">01.</span>
            <span>{isEs ? "El Desafío de Ingeniería" : "The Engineering Challenge"}</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            <p>
              {isEs
                ? "Los modpacks modernos de Minecraft generan un entorno de ejecución frágil y heterogéneo: cientos de artefactos JAR compilados por diferentes desarrolladores, dependencias cruzadas conflictivas, inyecciones de bytecode (Mixins) que mutan el runtime en caliente, crashes opacos de la JVM, archivos de guardado binarios vulnerables a corrupción y múltiples fuentes de estado concurrentes entre escritorio y dispositivos móviles."
                : "Modern Minecraft modpacks create an unstable, heterogeneous environment: hundreds of compiled JAR artifacts from disparate authors, conflicting transitive dependencies, runtime bytecode injections (Mixins), opaque JVM stacktraces, unverified binary world saves prone to silent corruption, and fragmented multi-client state across desktop workstations and mobile devices."}
            </p>
            <p>
              {isEs
                ? "MIM no aborda esto como un simple gestor de descargas superficial. Descompone el problema en subsistemas de ingeniería independientes y desacoplados, cada uno con contratos estrictos, aislamiento de fallas e invariantes verificables."
                : "MIM does not approach this as a superficial download manager. Instead, it decomposes the problem into decoupled, independent engineering subsystems, each governed by strict interface contracts, fault isolation, and verifiable invariants."}
            </p>
          </div>
        </section>

        {/* Section 2: Decoupled Domain Engines as Capabilities */}
        <section className="space-y-6 border-t border-white/[0.08] pt-12">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-indigo-400 font-mono">02.</span>
              <span>{isEs ? "Capacidades de los Motores de Dominio" : "Decoupled Domain Engines as Capabilities"}</span>
            </h2>
            <p className="text-sm text-neutral-400">
              {isEs
                ? "Subsistemas autónomos diseñados bajo el principio de responsabilidad única:"
                : "Autonomous subsystems built under single-responsibility isolation:"}
            </p>
          </div>

          <div className="grid gap-4">
            {/* Engine 1 */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 text-sm font-mono">✦</span>
                  <span>SAGE — Crash Intelligence</span>
                </h3>
                <span className={`${fira.className} text-[11px] text-indigo-300/80 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20`}>
                  Applied AI / RAG
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {isEs
                  ? "Clasificación determinista de stacktraces y diagnóstico estricto del mod culpable mediante scoring de confianza multifactorial, recuperación semántica de causa raíz (RAG) y guardrails matemáticos que impiden alucinaciones de LLMs."
                  : "Deterministic crash classification and culprit mod diagnosis powered by multi-factor evidence scoring, semantic RAG over compatibility knowledge bases, and strict guardrails preventing LLM hallucinations."}
              </p>
            </div>

            {/* Engine 2 */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 text-sm font-mono">✦</span>
                  <span>Aduana — Content-Addressed Storage</span>
                </h3>
                <span className={`${fira.className} text-[11px] text-indigo-300/80 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20`}>
                  I/O & CAS
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {isEs
                  ? "Identidad criptográfica de archivos (SHA-512 ≻ SHA-1), deduplicación entre plataformas (Modrinth & CurseForge) y caché de invalidación instantánea con verificación mtime + size para eliminar transferencias y lecturas redundantes."
                  : "Cryptographic file identity (SHA-512 ≻ SHA-1), cross-platform deduplication between Modrinth and CurseForge, and instant mtime + size cache invalidation eliminating redundant transfers."}
              </p>
            </div>

            {/* Engine 3 */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 text-sm font-mono">✦</span>
                  <span>FOMO Cloud — Distributed Synchronization</span>
                </h3>
                <span className={`${fira.className} text-[11px] text-indigo-300/80 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20`}>
                  Distributed Systems
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {isEs
                  ? "Sincronización colaborativa de estado offline-first con mutaciones optimistas en UI (<8ms), resolución determinista Last-Write-Wins (LWW) con timestamps y desempate por UUID de cliente, colas FIFO transaccionales en IndexedDB y PostgreSQL Row-Level Security (RLS) a nivel kernel."
                  : "Offline-first distributed synchronization with sub-8ms optimistic local UI mutations, deterministic Last-Write-Wins (LWW) resolution with client timestamps & UUID tie-breaking, IndexedDB FIFO mutation replay queues, and kernel-level PostgreSQL Row-Level Security."}
              </p>
            </div>

            {/* Engine 4 */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 text-sm font-mono">✦</span>
                  <span>Security Engine — Static JVM Analysis</span>
                </h3>
                <span className={`${fira.className} text-[11px] text-indigo-300/80 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20`}>
                  Application Security
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {isEs
                  ? "Análisis estático de bytecode Java y AST sin ejecución de código para identificar patrones de riesgo de cadena de suministro: droppers de procesos (ProcessBuilder), evasión por reflexión dinámica, sockets no autorizados y enlaces JNI nativos no administrados."
                  : "Static Java bytecode and AST inspection without executing untrusted code, detecting supply-chain threat patterns: process droppers, dynamic reflection evasion, unauthorized raw sockets, and unmanaged native JNI libraries."}
              </p>
            </div>

            {/* Engine 5 */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 text-sm font-mono">✦</span>
                  <span>NBT Rescue — Binary Data Recovery</span>
                </h3>
                <span className={`${fira.className} text-[11px] text-indigo-300/80 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20`}>
                  Binary & Storage
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {isEs
                  ? "Parsing estricto de la especificación binaria Mojang NBT v19133 con descompresión RFC 1952. Aplica el Invariante de Cero Pérdida de Datos: backups obligatorios volcados a disco y reemplazos atómicos con archivos temporales verificados."
                  : "Strict Mojang NBT v19133 binary parsing with RFC 1952 decompression. Enforces a Zero-Data-Loss Invariant through mandatory disk-flushed snapshot backups and verified atomic file replacement buffers."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Architecture & Event-Driven Topology */}
        <section className="space-y-6 border-t border-white/[0.08] pt-12">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-indigo-400 font-mono">03.</span>
              <span>{isEs ? "Arquitectura Orientada a Eventos" : "Event-Driven System Architecture"}</span>
            </h2>
            <p className="text-sm text-neutral-400">
              {isEs
                ? "Desacoplamiento estricto y topología de 7 motores de dominio:"
                : "Strict decoupling and 7 domain engines topology:"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-white/[0.08] space-y-5">
            {/* Visual Architecture Schematic */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                <p className={`${fira.className} text-[11px] text-indigo-400 font-mono uppercase tracking-wider`}>Presentation Layer</p>
                <p className="text-xs text-neutral-300 mt-1">Electron Native Shell + Next.js App Router + Mobile PWA</p>
              </div>
              <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30">
                <p className={`${fira.className} text-[11px] text-indigo-300 font-mono uppercase tracking-wider`}>Reactive Typed Event Bus</p>
                <p className="text-xs text-indigo-200 mt-1">MimEventMap Contract · Fault-Isolated Observers</p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                <p className={`${fira.className} text-[11px] text-indigo-400 font-mono uppercase tracking-wider`}>Tiered Persistence</p>
                <p className="text-xs text-neutral-300 mt-1">IndexedDB + Content-Addressed Local FS + PostgreSQL (RLS)</p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {isEs
                ? "MIM está organizado en torno a siete motores de dominio aislados conectados a través de una arquitectura orientada a eventos estrictamente tipada (MimEventMap). Cada subsistema es dueño de una responsabilidad específica mientras se comunica mediante contratos explícitos, garantizando que los fallos y detalles de implementación permanezcan completamente aislados sin bloqueos en cascada."
                : "MIM is organized around isolated domain engines connected through a typed event-driven architecture (MimEventMap). Each subsystem owns a specific responsibility while communicating through explicit contracts, allowing failures and implementation details to remain isolated without cascading faults."}
            </p>
          </div>
        </section>

        {/* Section 4: Empirical Measured Benchmarks */}
        <section className="space-y-6 border-t border-white/[0.08] pt-12">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2.5">
              <span className="text-indigo-400 font-mono">04.</span>
              <span>{isEs ? "Rendimiento Medido y Benchmarks" : "Empirical Measured Benchmarks"}</span>
            </h2>
            <p className="text-sm text-neutral-400">
              {isEs
                ? "Métricas empíricas auditables verificadas en suites automatizadas:"
                : "Auditable empirical metrics verified across automated test suites:"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
              <p className={`${fira.className} text-xl sm:text-2xl font-bold text-white`}>100%</p>
              <p className="text-xs text-neutral-400">Macro F1-Score</p>
              <p className={`${fira.className} text-[10px] text-indigo-400/90`}>SAGE canonical crash corpus</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
              <p className={`${fira.className} text-xl sm:text-2xl font-bold text-white`}>84%</p>
              <p className="text-xs text-neutral-400">Top-1 Culprit</p>
              <p className={`${fira.className} text-[10px] text-indigo-400/90`}>Strict root-cause attribution</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
              <p className={`${fira.className} text-xl sm:text-2xl font-bold text-white`}>8×–8.5×</p>
              <p className="text-xs text-neutral-400">Warm-Cache Speedup</p>
              <p className={`${fira.className} text-[10px] text-indigo-400/90`}>Aduana 1k to 25k scaling</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
              <p className={`${fira.className} text-xl sm:text-2xl font-bold text-white`}>42 ms</p>
              <p className="text-xs text-neutral-400">Realtime Broadcast</p>
              <p className={`${fira.className} text-[10px] text-indigo-400/90`}>Supabase WebSocket pub/sub</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
              <p className={`${fira.className} text-xl sm:text-2xl font-bold text-white`}>&lt; 8 ms</p>
              <p className="text-xs text-neutral-400">Optimistic UI Mutation</p>
              <p className={`${fira.className} text-[10px] text-indigo-400/90`}>React 19 + IndexedDB frame</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
              <p className={`${fira.className} text-xl sm:text-2xl font-bold text-white`}>0.06 ms</p>
              <p className="text-xs text-neutral-400">Mean Inference Latency</p>
              <p className={`${fira.className} text-[10px] text-indigo-400/90`}>Per crash log evaluation</p>
            </div>
          </div>

          <p className="text-xs text-neutral-400 italic">
            {isEs
              ? "* Nota: Los benchmarks representan mediciones específicas del proyecto bajo condiciones de prueba documentadas en suites headless."
              : "* Note: Benchmarks are project-specific measurements under the documented test conditions in headless suites."}
          </p>
        </section>

        {/* Section 5: Product Features (Secondary) */}
        <section className="space-y-4 border-t border-white/[0.08] pt-12">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-indigo-400 font-mono">05.</span>
            <span>{isEs ? "Capacidades de Producto" : "Product Features & User Experience"}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-neutral-300">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">Dual-Source Catalog Discovery</p>
              <p className="text-xs text-neutral-400 mt-1">Paridad de búsqueda en Modrinth y CurseForge con traductor transparente de slugs numéricos.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">JVM Tuning & Argument Presets</p>
              <p className="text-xs text-neutral-400 mt-1">Ajuste automático de asignación de memoria heap y flags optimizados para recolectores ZGC/G1.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">3D WebGL Skinview Avatar</p>
              <p className="text-xs text-neutral-400 mt-1">Renderizado tridimensional de perfiles con desbordamiento controlado y resolución Minotar.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">Graceful Showcase Video Fallbacks</p>
              <p className="text-xs text-neutral-400 mt-1">Aislamiento de fallas multimedia con enlace directo a YouTube si la extracción externa falla.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Full Tech Stack */}
        <section className="space-y-4 border-t border-white/[0.08] pt-12">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-indigo-400 font-mono">06.</span>
            <span>{isEs ? "Stack Tecnológico Completo" : "Full Technology Stack"}</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 16 (App Router)",
              "React 19",
              "TypeScript 5",
              "Electron 42",
              "PostgreSQL",
              "Supabase Realtime (WebSockets)",
              "Row-Level Security (RLS)",
              "IndexedDB (SmartCache)",
              "Node.js 22",
              "Chokidar (File Watching)",
              "yt-dlp",
              "Framer Motion",
              "Tailwind CSS v4",
              "Turbopack"
            ].map((tech) => (
              <span
                key={tech}
                className={`${fira.className} text-xs px-3 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.08]`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Footer CTAs */}
        <div className="border-t border-white/[0.08] pt-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            {isEs ? "← Volver al Portafolio" : "← Return to Portfolio"}
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://mim-hub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md"
            >
              {isEs ? "Abrir MIM Hub ↗" : "Open MIM Hub ↗"}
            </a>
            <a
              href="https://github.com/Ian9Franco/MIM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-neutral-200 border border-white/[0.1] transition-all"
            >
              GitHub ↗
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
