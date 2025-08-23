# 部署脚本到 GitHub Pages
Write-Host "开始部署到 GitHub Pages..." -ForegroundColor Green

# 确保在正确的目录
Set-Location $PSScriptRoot

# 构建项目
Write-Host "构建项目..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "构建成功!" -ForegroundColor Green
    
    # 复制 404.html 作为 SPA 路由回退（确保直接访问 /thanks 等子路径时可用）
    try {
        $source = Join-Path $PSScriptRoot "dist/index.html"
        $target = Join-Path $PSScriptRoot "dist/404.html"
        if (Test-Path $source) {
            Copy-Item -Path $source -Destination $target -Force
            Write-Host "已生成 dist/404.html 作为 SPA 回退" -ForegroundColor Yellow
        } else {
            Write-Host "未找到 dist/index.html，无法生成 404.html" -ForegroundColor Red
        }
    } catch {
        Write-Host "复制 404.html 失败: $_" -ForegroundColor Red
    }
    
    # 部署到 GitHub Pages
    Write-Host "部署到 GitHub Pages..." -ForegroundColor Yellow
    npx gh-pages -d dist
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "部署成功! 您的网站将在几分钟内可用: https://echointlmedica.com" -ForegroundColor Green
    } else {
        Write-Host "部署失败，请检查错误信息" -ForegroundColor Red
    }
} else {
    Write-Host "构建失败，请检查错误信息" -ForegroundColor Red
}
