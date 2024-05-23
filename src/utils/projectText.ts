import { type DefaultProjectText } from '@/types/projectText';

/* 项目默认的文字 */
const defaultProjectText: DefaultProjectText[] = [
  {
    title: '个人博客系统',
    content: [
      ['前端：Nuxt3，Vue3，TypeScript，Pinia，Unocss，Sass，Element-Plus', '后端：Node.js，Express，Knex，Multer，Sharp，Mysql'],
      [
        '1、使用Node.js构建服务端；Knex构建SQL语法；Multer构建文件上传；Sharp对图片进行压缩',
        '2、用Nuxt3与TypeScript构建富文本编辑器。实现对样式的DOM操作；实现添加代码块，分隔符等插入；实现图片上传与粘贴，富文本编辑器中图片地址转成图片上传之后的地址',
        '3、构建前台与后台；前台可以进行查看文章列表、发布文章、举报等；后台可以管理文章、举报内容等',
        '4、前台进行SEO优化，并且采用服务端渲染，并且使用自己打造的样式组件'
      ],
      ['在线地址', 'Github地址']
    ]
  },
  {
    title: 'React音乐播放器',
    content: ['React18，TypeScirpt，Hooks，RTK，React-redux，React-router-dom，axios，sass', '测试数据2', '测试数据3']
  },
  {
    title: 'Vue音乐播放器',
    content: ['React18，TypeScirpt，Hooks，RTK，React-redux，React-router-dom，axios，sass', '测试数据2', '测试数据3']
  },
  {
    title: 'Vue音乐播放器',
    content: ['React18，TypeScirpt，Hooks，RTK，React-redux，React-router-dom，axios，sass', '测试数据2', '测试数据3']
  }
];

export default defaultProjectText;
