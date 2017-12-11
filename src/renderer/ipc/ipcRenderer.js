import { ipcRenderer } from 'electron';
import * as ipc from '../../utils/ipc-types';

/**
 * 详情数据返回监听
 * @param {Function} callback 回调函数
 */
export function initInfoBack(callback) {
  ipcRenderer.removeAllListeners(ipc.INFO_REPLY); // 先移除监听, 防止重复注册
  ipcRenderer.on(ipc.INFO_REPLY, (event, data) => {
    callback(data);
  });
}

/**
 * 暂停下载数据返回监听
 * @param {Function} callback 回调函数
 */
export function initPauseBack(callback) {
  ipcRenderer.removeAllListeners(ipc.PAUSE_REPLY); // 先移除监听, 防止重复注册
  ipcRenderer.on(ipc.PAUSE_REPLY, (event, data) => {
    callback(data);
  });
}

/**
 * 下载进度数据返回间监听
 * @param {Function} callback 回调函数
 */
export function initDownloadBack(callback) {
  ipcRenderer.removeAllListeners(ipc.DOWNLOAD_REPLY); // 先移除监听, 防止重复注册
  ipcRenderer.on(ipc.DOWNLOAD_REPLY, (event, data) => {
    callback(data);
  });
}

/**
 * 发送查询数据
 * @param {String} url 视频地址
 */
export function sendInfo(url) {
  ipcRenderer.send(ipc.INFO, url);
}

/**
 * 新建下载
 * @param {String} url 下载地址
 * @param {String} uid 下载项目的uuid
 * @param {*} options 下载配置项
 */
export function download(url, uid, options) {
  ipcRenderer.send(ipc.DOWNLOAD, url, uid, options);
}

/**
 * 暂停下载
 * @param {Array} uids 下载项目的uuid
 */
export function pause(uids) {
  ipcRenderer.send(ipc.PAUSE, uids);
}
