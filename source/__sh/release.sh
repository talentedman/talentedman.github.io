now_path=$(cd $(dirname $0);pwd)

indexHtmlPath=${now_path}/../../index.html
staticDirPath=${now_path}/../../static/

rm -rf ${indexHtmlPath}
rm -rf ${staticDirPath}

yarn build

buildDirPath=${now_path}/../dist/*
rootPath=${now_path}/../../

mv -f ${buildDirPath} ${rootPath}

cd ${rootPath}

if [ -f ${indexHtmlPath} ]; then
    git add .
    git commit -m "通过脚本release.sh发版"
    git push
else
    echo "打包失败 index.html不存在???"
fi

