# Vue3 + TSX项目

# 开发

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