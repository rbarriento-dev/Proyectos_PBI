"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Package, Moon, Sun } from "lucide-react"

interface Dashboard {
  id: string
  title: string
  description: string
  lastUpdated: string
  icon: React.ReactNode
}

const dashboards: Dashboard[] = [
  {
    id: "sanidad",
    title: "Metricas de Salud",
    description:
      "Análisis detallado del volumen de asistencias por tipo de servicio de hospitales publicos de la Ciudad de Buenos Aires.",
    lastUpdated: "2 de noviembre de 2024",
    icon: <TrendingUp className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
  },
  {
    id: "nps",
    title: "Satisfacción del Cliente (NPS)",
    description:
      "Seguimiento de feedback de clientes y análisis de sentimiento para mejorar la experiencia de usuario.",
    lastUpdated: "31 de octubre de 2024",
    icon: <BarChart3 className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
  },
  {
    id: "inventory",
    title: "Inventario y Logística Global",
    description:
      "Volumen de paqueteria, movimientos de inventario y optimización de la cadena de suministro global.",
    lastUpdated: "30 de octubre de 2024",
    icon: <Package className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
  },
]

export default function PowerBIDashboard() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check system preference
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  const handleViewDashboard = (dashboardId: string) => {
    window.location.href = `/dashboard/${dashboardId}`
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Panel de Acceso a Tableros Power BI</h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-foreground/60" />}
            </button>
          </div>
          <p className="text-muted-foreground text-sm">
            Accede a todos mis proyectos de visualizacion de datos con Power BI
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard) => (
            <Card
              key={dashboard.id}
              className="border border-border bg-card hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4">{dashboard.icon}</div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">{dashboard.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {dashboard.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground/70">Última actualización: {dashboard.lastUpdated}</p>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      className="flex-1 text-sm font-medium bg-transparent"
                      onClick={() => console.log(`Detalle de ${dashboard.id}`)}
                    >
                      Detalle
                    </Button>
                    <Button
                      className="flex-1 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground dark:hover:bg-primary/80 transition-colors"
                      onClick={() => handleViewDashboard(dashboard.id)}
                    >
                      Ver Tablero
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-secondary border border-border rounded-lg">
          <h2 className="text-lg font-semibold text-foreground mb-2">Personaliza tus tableros</h2>
          <p className="text-muted-foreground text-sm">
            Haz clic en el botón "Ver Tablero" para acceder al análisis completo. Utiliza el botón "Detalle" una breve explicación.
          </p>
        </div>
      </section>
    </main>
  )
}
