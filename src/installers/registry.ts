import { BepInExInstaller } from "./BepInExInstaller";
import { GodotMLInstaller } from "./GodotMLInstaller";
import { MelonLoaderInstaller } from "./MelonLoaderInstaller";
import { PackageInstaller } from "./PackageInstaller";
import { InstallRuleInstaller } from "./InstallRuleInstaller";
import { ShimloaderInstaller, ShimloaderPluginInstaller } from "./ShimloaderInstaller";


const _PackageInstallers = {
    // "legacy": new InstallRuleInstaller(),  // TODO: Enable
    "bepinex": new BepInExInstaller(),
    "godotml": new GodotMLInstaller(),
    "melonloader": new MelonLoaderInstaller(),
    "shimloader": new ShimloaderInstaller(),
    "shimloader-plugin": new ShimloaderPluginInstaller(),
}

export type PackageInstallerId = keyof typeof _PackageInstallers;
export const PackageInstallers: {[key in PackageInstallerId]: PackageInstaller} = _PackageInstallers;
