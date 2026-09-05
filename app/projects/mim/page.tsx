"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { fira } from "@/lib/utils"
import styles from "./mim-case-study.module.css"
import { Tag } from "@/components/tag"
import animation from "@/components/mim-animation.module.css"

export default function MimCaseStudyPage() {
  const { language } = useLanguage()
  const isEs = language === "es"

  return (
    <main className={`${styles.page} min-h-screen bg-black text-neutral-200 pt-24 pb-12 px-6 sm:px-8 selection:bg-indigo-500/30 selection:text-indigo-200`}>
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Navigation / Back link */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>{isEs ? "Ian Pontorno / Portafolio" : "Ian Pontorno / Portfolio"}</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className={`${fira.className} text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/25`}>
              {isEs ? "Caso de estudio · Proyecto principal actual" : "Case study · Current flagship"}
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <section className={styles.hero}>
          <div className="space-y-6 min-w-0">
          <div>
            <p className={`${fira.className} text-xs uppercase tracking-[0.2em] text-indigo-300 mb-4`}>Minecraft Intelligent Manager</p>
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">MIM<span className="text-indigo-400">.</span></h1>
              <p className={`${fira.className} text-sm sm:text-base text-indigo-300 font-medium tracking-tight mt-4`}>
                {isEs ? "Plataforma de modding para escritorio y web" : "Desktop & Web Modding Platform"}
              </p>
            </div>
          </div>

          <p className="text-lg text-neutral-300 leading-relaxed font-normal">
            {isEs
              ? "Una plataforma de escritorio y web para organizar modpacks, diagnosticar errores, proteger archivos y colaborar entre dispositivos."
              : "A desktop and web platform for organizing modpacks, diagnosing failures, protecting files, and collaborating across devices."}
          </p>

          {/* Discipline Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              "Systems Engineering", "Applied AI", "Distributed Systems", "Security", "Binary Safe Recovery"
            ].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          </div>
          <div className={styles.mascotStage}>
            <div className={styles.mascotHalo} aria-hidden="true" />
            <div className={animation.slime}>
              <Image
                src="/images/projects/mim.png"
                alt="MIM Logo"
                width={160}
                height={160}
                priority
                className="object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Action CTAs */}
          <div className={`${styles.heroActions} flex flex-wrap items-center gap-3 pt-2`}>
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
        </section>

        <nav aria-label={isEs ? "Secciones del caso de estudio" : "Case study sections"} className={styles.sectionNav}>
          {[
            ["challenge", isEs ? "El desafío" : "Challenge"],
            ["engines", isEs ? "Motores" : "Engines"],
            ["architecture", isEs ? "Arquitectura" : "Architecture"],
            ["benchmarks", "Benchmarks"],
            ["product", isEs ? "Producto" : "Product"],
            ["stack", "Stack"],
          ].map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
        </nav>

        {/* Lead Summary Callout */}
        <section className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/30 via-neutral-900/40 to-neutral-950 border border-indigo-500/20 shadow-inner">
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed italic">
            {isEs
              ? "“MIM comenzó como una herramienta para organizar mods y creció a medida que aparecieron problemas reales de diagnóstico, almacenamiento, recuperación y sincronización.”"
              : "“MIM began as a tool for organizing mods and grew as real problems emerged around diagnostics, storage, recovery, and synchronization.”"}
          </p>
        </section>

        <section className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <p className={`${fira.className} text-[11px] uppercase tracking-wider text-indigo-400`}>
              {isEs ? "Mi trabajo" : "My work"}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed mt-2">
              {isEs
                ? "Diseño y desarrollo el producto de punta a punta: experiencia de escritorio y web, integraciones, manejo de archivos, contratos entre módulos, documentación técnica y controles automatizados."
                : "I design and develop the product end to end: desktop and web experiences, integrations, file handling, module contracts, technical documentation, and automated checks."}
            </p>
          </div>
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <p className={`${fira.className} text-[11px] uppercase tracking-wider text-indigo-400`}>
              {isEs ? "Estado" : "Status"}
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed mt-2">
              {isEs ? "En desarrollo activo" : "Actively developed"}
            </p>
            <a
              href="https://github.com/Ian9Franco/MIM/commits/main/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-indigo-300 hover:text-indigo-200 mt-2"
            >
              {isEs ? "Ver evolución ↗" : "View progress ↗"}
            </a>
          </div>
        </section>

        {/* Section 1: The Engineering Challenge */}
        <section id="challenge" className="space-y-4 border-t border-white/[0.08] pt-12">
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
        <section id="engines" className="space-y-6 border-t border-white/[0.08] pt-12">
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
              <div className={styles.engineHeading}>
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="text-indigo-400 text-sm font-mono">✦</span>
                  <span>SAGE — Crash Intelligence</span>
                </h3>
                <span className={`${fira.className} text-[11px] text-indigo-300/80 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20`}>
                  Deterministic Diagnostics + AI Explanation
                </span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {isEs
                  ? "Clasificación determinista de stacktraces y atribución del mod probable mediante evidencia y scoring de confianza. La capa de IA recibe el reporte estructurado para explicarlo, sin autoridad para reemplazar el diagnóstico del motor."
                  : "Deterministic stacktrace classification and likely-culprit attribution based on evidence and confidence scoring. The AI layer receives the structured report to explain it without authority to replace the engine's diagnosis."}
              </p>
            </div>

            {/* Engine 2 */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2">
              <div className={styles.engineHeading}>
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
              <div className={styles.engineHeading}>
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
                  ? "Sincronización colaborativa offline-first con actualizaciones optimistas, resolución Last-Write-Wins, colas de reintento en IndexedDB y políticas Row-Level Security en PostgreSQL."
                  : "Offline-first collaborative synchronization with optimistic updates, Last-Write-Wins conflict resolution, IndexedDB retry queues, and PostgreSQL Row-Level Security policies."}
              </p>
            </div>

            {/* Engine 4 */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all space-y-2">
              <div className={styles.engineHeading}>
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
              <div className={styles.engineHeading}>
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
                  ? "Procesamiento binario NBT con backups previos, escritura en archivos temporales, validación y reemplazo atómico. La suite de integración verifica que el archivo original permanezca recuperable ante fallos contemplados."
                  : "NBT binary processing with pre-write backups, temporary files, validation, and atomic replacement. The integration suite verifies that the original remains recoverable across the covered failure cases."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Architecture & Event-Driven Topology */}
        <section id="architecture" className="space-y-6 border-t border-white/[0.08] pt-12">
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
        <section id="benchmarks" className="space-y-6 border-t border-white/[0.08] pt-12">
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
          <div className="flex flex-wrap gap-4 text-xs">
            <a
              href="https://github.com/Ian9Franco/MIM/blob/main/docs/engines/SAGE_EVALUATION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-200"
            >
              {isEs ? "Metodología de SAGE ↗" : "SAGE methodology ↗"}
            </a>
            <a
              href="https://github.com/Ian9Franco/MIM/blob/main/scripts/benchmarks/aduana-benchmark.ts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-200"
            >
              {isEs ? "Benchmark de Aduana ↗" : "Aduana benchmark ↗"}
            </a>
          </div>
        </section>

        {/* Section 5: Product Features (Secondary) */}
        <section id="product" className="space-y-4 border-t border-white/[0.08] pt-12">
          <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-indigo-400 font-mono">05.</span>
            <span>{isEs ? "Capacidades de Producto" : "Product Features & User Experience"}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-neutral-300">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">Dual-Source Catalog Discovery</p>
              <p className="text-xs text-neutral-400 mt-1">
                {isEs
                  ? "Búsqueda integrada en Modrinth y CurseForge con normalización de identificadores."
                  : "Integrated Modrinth and CurseForge search with identifier normalization."}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">JVM Tuning & Argument Presets</p>
              <p className="text-xs text-neutral-400 mt-1">
                {isEs
                  ? "Presets de memoria y argumentos para distintos perfiles de hardware y recolectores de basura."
                  : "Memory and argument presets for different hardware profiles and garbage collectors."}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">3D WebGL Skinview Avatar</p>
              <p className="text-xs text-neutral-400 mt-1">
                {isEs
                  ? "Vista tridimensional del avatar de Minecraft dentro del perfil."
                  : "Interactive 3D Minecraft avatar rendering inside the user profile."}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="font-semibold text-white">Graceful Showcase Video Fallbacks</p>
              <p className="text-xs text-neutral-400 mt-1">
                {isEs
                  ? "Fallback hacia YouTube cuando la extracción o reproducción integrada no está disponible."
                  : "Fallback to YouTube when embedded extraction or playback is unavailable."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Full Tech Stack */}
        <section id="stack" className="space-y-4 border-t border-white/[0.08] pt-12">
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
              <Tag key={tech}>{tech}</Tag>
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
