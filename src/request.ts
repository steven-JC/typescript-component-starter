export default (
    url: string,
    data = {},
    method: 'GET' | 'POST' = 'GET',
    sync = false,
    headers: any = {}
) => {
    return new Promise((r, rj) => {
        const xmlhttp = new XMLHttpRequest()
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200) {
                    r(JSON.parse(xmlhttp.responseText))
                } else {
                    rj(
                        new Error(
                            'Problem retrieving data:' + xmlhttp.statusText
                        )
                    )
                    console.error(
                        'Problem retrieving data:' + xmlhttp.statusText
                    )
                }
            }
        }

        if (method === 'GET' && Object.keys(data).length > 0) {
            url = url + (url.indexOf('?') > -1 ? '&' : '?') + stringify(data)
        }

        xmlhttp.open(method, url, !!sync)
        for (const x in headers) {
            if (headers.hasOwnProperty(x)) {
                xmlhttp.setRequestHeader(x, headers[x])
            }
        }

        xmlhttp.send(
            method === 'GET' || Object.keys(data).length === 0
                ? null
                : stringify(data)
        )
    })
}

function stringify(data: any) {
    const res: string[] = []
    for (const x in data) {
        if (data.hasOwnProperty(x)) {
            res.push(`${x}=${encodeURIComponent(data[x])}`)
        }
    }
    return res.join('&')
}
