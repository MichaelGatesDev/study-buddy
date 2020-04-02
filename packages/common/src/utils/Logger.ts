import chalk from "chalk";
import moment from "moment";

export enum LogLevel {
  Info,
  Warning,
  Error,
  Debug,
}

export class Logger {
  /**
   * @param level The level of the log message. Defaults to Info
   * @param msg The actual log message
   */
  public static log(level: LogLevel = LogLevel.Info, msg: string) {
    let msgPrefixes = "";

    let timestamp = moment().format("HH:mm:ss");
    msgPrefixes += `[${timestamp}]`;

    let levelStr = Logger.getColorizedLevel(level);
    msgPrefixes += `[${levelStr}]`;

    console.log(`${msgPrefixes}: ${msg}`);
  }

  public static info(msg: string) {
    Logger.log(LogLevel.Info, msg);
  }
  public static warning(msg: string) {
    Logger.log(LogLevel.Warning, msg);
  }

  public static error(msg: string) {
    Logger.log(LogLevel.Error, msg);
  }

  public static debug(msg: string) {
    Logger.log(LogLevel.Debug, msg);
  }

  private static getColorizedLevel(level: LogLevel) {
    let levelStr = LogLevel[level].toString().toUpperCase();
    switch (level) {
      case LogLevel.Info:
        return chalk.white(levelStr) + chalk.reset();
      case LogLevel.Warning:
        return chalk.yellow(levelStr) + chalk.reset();
      case LogLevel.Error:
        return chalk.red(levelStr) + chalk.reset();
      case LogLevel.Debug:
        return chalk.blue(levelStr) + chalk.reset();
    }
  }
}
