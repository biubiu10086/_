 name: 步步宝

 on:
   workflow_dispatch:
   schedule:
     - cron: '*/5 * * * *'
   watch:
     types: started
   repository_dispatch:
     types: _

 jobs:
   build:
     runs-on: ubuntu-latest
     if: github.event.repository.owner.id == github.event.sender.id
     env:
         BBB_bububaoTOKEN: ${{ secrets.BBB_bububaoTOKEN }}
         BBB_CASH: ${{ secrets.BBB_CASH }}
     steps:
       - name: Checkout
         run: |
           git clone https://github.com/ziye66666/JavaScript.git ~/JavaScript
       - name: Use Node.js 12.x
         uses: actions/setup-node@v1
         with:
           node-version: 12.x
       - name: npm install
         if: env.BBB_bububaoTOKEN
         run: |
           cd ~/JavaScript
           npm install
       - name: '运行 【步步宝】'
         if: env.BBB_bububaoTOKEN
         run: |
           cd ~/JavaScript
           node Task/bububao.js
         env:
           TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
           TG_USER_ID: ${{ secrets.TG_USER_ID }}
