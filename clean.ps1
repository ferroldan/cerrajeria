# Script para limpiar archivos de Next.js antes de iniciar el servidor
Write-Host "Limpiando archivos de Next.js..." -ForegroundColor Yellow

# Detener procesos de Node
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1

# Eliminar carpeta .next
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
    Write-Host "✅ Carpeta .next eliminada" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Carpeta .next no existe" -ForegroundColor Cyan
}

# Eliminar archivo trace específico si existe
if (Test-Path .next\trace) {
    Remove-Item -Force .next\trace -ErrorAction SilentlyContinue
    Write-Host "✅ Archivo trace eliminado" -ForegroundColor Green
}

Write-Host "`n✅ Limpieza completada. Puedes ejecutar 'npm run dev' ahora." -ForegroundColor Green

