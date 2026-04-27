import urllib.request
from bs4 import BeautifulSoup

req = urllib.request.Request(
    'https://hhygroup.com', 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
)
try:
    html = urllib.request.urlopen(req).read()
    soup = BeautifulSoup(html, 'html.parser')
    with open('site_text.txt', 'w', encoding='utf-8') as f:
        f.write(soup.get_text(separator='\n', strip=True))
    print("Success")
except Exception as e:
    print("Error:", e)
