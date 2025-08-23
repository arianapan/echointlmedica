# 部署脚本到 GitHub Pages
Write-Host "开始部署到 GitHub Pages..." -ForegroundColor Green

# 确保在正确的目录
Set-Location $PSScriptRoot

# 构建项目
Write-Host "构建项目..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "构建成功!" -ForegroundColor Green
    
    # 部署到 GitHub Pages
    Write-Host "部署到 GitHub Pages..." -ForegroundColor Yellow
    npm run deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "部署成功! 您的网站将在几分钟内可用: https://echointlmedica.com" -ForegroundColor Green
    } else {
        Write-Host "部署失败，请检查错误信息" -ForegroundColor Red
    }
} else {
    Write-Host "构建失败，请检查错误信息" -ForegroundColor Red
}
