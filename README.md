# stream-files-sender

The purpose of this repo to show the simplicity of stream approach over http protocol.

## Background

Opposite buffered approach is widely used by it's writing simplicity. The main concern about usage buffers is related to complex and counterintuitive semantics.
Also, streams are everywhere once you deal with `req` and `res` objects. Also `data`, `finish`, `error` events have their roots in stream nature of http built library.

## Usage

To run server which accepts streamed file request

```sh
mkdir server_files && docker-compose up
```

To run client which accepts two additional params (filename and host)

```sh
mkdir client_files && touch test.txt #create test example content to be sent by `client` script
npm run client -- test.txt localhost #actual file sending over http
```
where
- `test.txt` - the file name within `client_files` folder
- `localhost` - current hostname in your local environment
