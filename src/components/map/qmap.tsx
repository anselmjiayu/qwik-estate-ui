import { qwikify$ } from "@builder.io/qwik-react";
import {LazyMap} from './load-map';
export const QMap = qwikify$(LazyMap, {clientOnly: true});
