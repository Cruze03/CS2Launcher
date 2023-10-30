import fetch from 'node-fetch';

async function fetchServers() {
    return await fetch('https://raw.githubusercontent.com/cruze03/CS2Launcher/main/SERVERLIST.json')
        .then(res => res.json())
        .then(json => {
            return json['servers'];
        });
}

export { fetchServers };
