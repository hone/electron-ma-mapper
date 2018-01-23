extern crate ma_mapper;
#[macro_use]
extern crate neon;

use ma_mapper::board::Board;
use neon::vm::{Call, JsResult, Lock};
use neon::js::JsInteger;
use neon::js::binary::JsArrayBuffer;

fn fetch_arg<'a, T: neon::js::Value>(call: &mut Call<'a>, index: i32) -> JsResult<'a, T> {
    call.arguments.require(call.scope, index)?.check::<T>()
}

fn ma_map(mut call: Call) -> JsResult<JsArrayBuffer> {
    let num_tiles = fetch_arg::<JsInteger>(&mut call, 0)?.value() as usize;
    let width = fetch_arg::<JsInteger>(&mut call, 1)?.value() as usize;
    let height = fetch_arg::<JsInteger>(&mut call, 2)?.value() as usize;
    let board = Board::new(num_tiles, width, height);
    let buffer_size = (2 * width * height) as u32;
    let mut js_map = JsArrayBuffer::new(call.scope, buffer_size)?;

    for (index, tile_option) in board.data.iter().enumerate() {
        let js_value = match tile_option {
            &Some(tile) => match tile.value {
                ma_mapper::board::Value::Normal => 2,
                ma_mapper::board::Value::Van => 1,
            },
            &None => 0,
        };
        js_map.grab(|mut slice| slice[index] = js_value);
    }
    
    Ok(js_map)
}

register_module!(m, {
    m.export("ma_map", ma_map)
});
