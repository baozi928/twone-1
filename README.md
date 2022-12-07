# Vue3 + TSX项目

## 部署
```bash
pnpm run build --base /
bin/coscli-linux cp r dist cos://youyuquan-t-1-1315694120

```

## 编码规范

### ref 默认值
推荐使用

```tsx
const div = ref<HTMLDivElement>();
```

不推荐使用

```tsx
const div = ref<HTMLDivElement | null>(null);
```

# 如何打包