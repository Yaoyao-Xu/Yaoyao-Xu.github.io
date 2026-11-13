# Yaoyao Xu · Personal Homepage

首页使用独立的 `research-home` 布局，兼容当前 Jekyll / GitHub Pages 配置。
页面结构参考 [Xinjian Zhao 的公开主页](https://xinjian-zhao.github.io/)，个人简介、照片、联系方式和论文以本仓库内容为准。

日常更新位置：

- `_pages/about.md`：个人简介。
- `files/Yaoyao_Xu_CV.pdf`：编译好的 CV PDF，首页 CV 按钮位于 Google Scholar 前。更新简历时覆盖此文件即可；更换路径时同步修改 `_config.yml` 的 `author.cv`。
- `_config.yml` 中的 `author`：姓名、头像、邮箱及学术主页；`github` 填用户名，不填完整网址。
- `_data/home.yml`：按 thesis proposal 的表征、模拟、设计主线介绍研究方向、标签和对应论文的 `id`；重点展示一作工作，合作文章保留在完整论文列表中。
- `_data/home_publications.yml`：论文标题、作者、会议、年份和链接。作者支持 Markdown 加粗和 `\*` 共同一作标记；没有链接时省略 `paper_url`。
  `authorship` 填 `first`（一作，含共同一作）或 `collaborative`（合作文章）；页面先显示一作组，再显示合作组，各组按 `sort_date` 从近到远自动排序。`sort_date` 使用引号包裹的 `YYYY-MM-DD`，只确认年月或年份时可填 `YYYY-MM` 或 `YYYY`；日期精度相同的文章无需再区分先后，只确认年份的条目排在该年已确认日期的条目之后。`status` 可写投稿状态，例如 `Under review at Nature Communications`，`note` 可说明扩刊关系。
- `assets/css/research-home.css`：首页样式和手机适配。
- `_layouts/research-home.html`、`assets/js/research-home.js`：首页结构及手机导航。

安装依赖并本地预览：

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

打开 `http://localhost:4000`。修改 `_config.yml` 后需要重启服务。
完整构建检查使用 `bundle exec jekyll build`。

---

A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I think I've got things running smoothly and fixed some major bugs, but feel free to file issues or make pull requests if you want to improve the generic template / theme.

### Note: if you are using this repo and now get a notification about a security vulnerability, delete the Gemfile.lock file. 

# Instructions

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository and made updates as detailed above
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `bundle exec jekyll liveserve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

# Changelog -- bugfixes and enhancements

There is one logistical issue with a ready-to-fork template theme like academic pages that makes it a little tricky to get bug fixes and updates to the core theme. If you fork this repository, customize it, then pull again, you'll probably get merge conflicts. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch. 

To support this, all changes to the underlying code appear as a closed issue with the tag 'code change' -- get the list [here](https://github.com/academicpages/academicpages.github.io/issues?q=is%3Aclosed%20is%3Aissue%20label%3A%22code%20change%22%20). Each issue thread includes a comment linking to the single commit or a diff across multiple commits, so those with forked repositories can easily identify what they need to patch.
