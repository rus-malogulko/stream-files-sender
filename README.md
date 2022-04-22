# stream-files-sender

The purpose of this repo to show the simplicity of stream approach.

## Background

Opposite buffered approach is widely used by it's writing simplicity. The main concern about usage buffers is related to complex and counterintuitive semantics.
Also, streams are everywhere once you deal with `req` and `res` objects. Also `data`, `finish`, `error` events have their roots in stream nature of http built library.

## Usage

To run server which accepts streamed file request

```js
npm run server
```

To run client which accepts two additional params (filename and host)

```js
npm run client -- <file_name> <host_name>
```
where
- `file_name` the file name withing `client_files` library
- `host_name` might be a `localhost` in your local environment
