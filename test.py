from flask import Flask

a = Flask(__name__)
@a.route("/")
def m():
    return open("app/spa-loading-template.html","r").read()

a.run(port=5100)
